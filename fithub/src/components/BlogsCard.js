import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import CommentsCard from './CommentsCard';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  

const BlogsCard=(props)=>
{
  const [expanded, setExpanded] = React.useState(false);
  const [color,setColor]=React.useState();
  const [comments,setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [details,setDetails] = React.useState("");

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


  const getHashOfString=(str)=>
  {
    let hash = 0;
    for(let i=0;i<str.length;i++)
    {
      hash = str.charCodeAt(i) + ((hash<<5)-hash);
    }
    hash = Math.abs(hash);
    return hash;
  }

  const normalizaHash = (hash,min,max)=>
  {
    return Math.floor((hash % (max - min)) + min);
  }

  const hRange = [0, 360];
  const sRange = [35, 75];
  const lRange = [10, 50];


  const generateHSL = () =>
  {
    const hash = getHashOfString(props.uname);
    const h =normalizaHash(hash, hRange[0], hRange[1]);
    const s =normalizaHash(hash, sRange[0], sRange[1]);
    const l =normalizaHash(hash, lRange[0], lRange[1]);
    return `hsl(${h},${s}%,${l}%)`;
  }

   React.useEffect(()=>{
    setColor(generateHSL());
  },[props.uname]);

    React.useEffect(()=>{
      fetch("http://localhost:4000/Comments")
      .then((temp)=> temp.json())
      .then((temp) => setComments(temp))
      .catch((err)=>console.log(err));
      let data=JSON.parse(localStorage.getItem("userno"))
      let admin=JSON.parse(localStorage.getItem("adminno"))
      admin?setDetails(admin):setDetails(data)
    },[])

    const PostComments = ()=>{
      let d = new Date();
      let dnt=d.toLocaleString()
      let uname=details.userid
      let phone=details.phoneno
      if(comment.length>0)
      {
        let newComment = {
          blogId:props.id, 
          uname:uname,
          dnt:dnt, 
          comment:comment,
          phone:phone
        }
        fetch("http://localhost:4000/Comments",
        {
            method: "POST",
            body: JSON.stringify(newComment)
        })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
        setComments([...comments, newComment])
      }
  }

    return(<>

    <Card sx={{ maxWidth:"90%", height:"auto" , position: 'relative', left:"5%", marginTop:"20px", border:"black 1px solid", background: "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",boxShadow:"none"}}>
      <CardHeader
      style={{color:"black",fontSize:"bold"}}
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {props.uname[0].toUpperCase()}
          </Avatar>
        }
        title={props.uname}
        subheader={props.dnt}
      />
      
      <CardContent>
        <Typography variant="body2" color="black">
          <h1>{props.title}</h1>
          <p style={{ whiteSpace: 'pre-wrap' }}>{props.description}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{boxShadow:"none",width:"auto", height:"auto"}}
        >
          <CommentTwoToneIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <div className='cInputCont'>
          <input type="text" placeholder='Enter your comments here....' onChange={(e)=>setComment(e.target.value)} className="commentsInput"/> <button onClick={PostComments} className='cButton'>Comment</button>
         </div>
        <CardContent style={{height:"200px", overflow:"hidden", overflowY:"scroll", marginTop:"10px"}}>
         
         {
            comments.filter((temp)=>temp.blogId===props.id).map((temp)=><CommentsCard uname={temp.uname} dnt={temp.dnt} comment={temp.comment}/>)
           }
           
        </CardContent>
      </Collapse>
    </Card>



    
    </>)
}

export default BlogsCard;
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
import BlogsMorevert from './BlogsMorevert';
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

const CreateBlogsCard=(props)=> {
  const [expanded, setExpanded] = React.useState(false);
  const [color,setColor]=React.useState();
  const [flag,setFlag]=React.useState(false);
  const [ntitle,setNtitle]=React.useState(props.title);
  const [ndes,setNdes]=React.useState(props.description);
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
  
  const edit=(f)=>
  {
    setFlag(f);
  }

  React.useEffect(()=>{
    fetch("http://localhost:4000/Comments")
    .then((temp)=> temp.json())
    .then((temp) => setComments(temp))
    .catch((err)=>console.log(err));
    let data=JSON.parse(localStorage.getItem("userno"))
    let admin=JSON.parse(localStorage.getItem("adminno"))
    admin?setDetails(admin):setDetails(data)
  },[])

 

  const updateok=(id)=>
    {
        let d = new Date();
        let dnt=d.toLocaleString()+"(Edited)";
        fetch(`http://localhost:4000/Blogs/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:ntitle,description:ndes,dnt:dnt
            })
        })
        .then((data)=>data.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
        window.location.reload();
    }

    const PostComments = ()=>{
      let d = new Date();
      let dnt=d.toLocaleString()
      let uname=details.userid
      let phone=details.phoneno
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
      alert(`Comments sent successfully`)
      setComments([...comments, newComment])
      setComment("")

  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {props.uname[0].toUpperCase()}
          </Avatar>
        }
        action={
            <BlogsMorevert id={props.id} edit={edit}/>
            
        }
        title={props.uname}
        subheader={props.dnt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">  
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          {flag===true?<div><input type='text' value={ntitle} onChange={(e)=>setNtitle(e.target.value)}/><br/><textarea value={ndes} onChange={(e)=>setNdes(e.target.value)}></textarea><br/><button onClick={()=>updateok(props.id)}>ok</button>{console.log(ndes)}</div>:null}
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
        <CardContent>
          <input type="text" placeholder='Enter your comments here....' onChange={(e)=>setComment(e.target.value)}/> <button onClick={PostComments}>Send</button>
           {
            comments.filter((temp)=>temp.blogId===props.id).map((temp)=><CommentsCard uname={temp.uname} dnt={temp.dnt} comment={temp.comment}/>)
           }
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CreateBlogsCard;
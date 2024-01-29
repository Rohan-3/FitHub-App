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
import { red } from '@mui/material/colors';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    React.useEffect(()=>{
      let hex = Math.floor(Math.random()* 0xFFFFFF);
       let color = "#" + hex.toString(16);
       setColor(color)
    },[props.title])

    return(<>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {props.uname[0].toUpperCase()}
          </Avatar>
        }
        title={props.uname}
        subheader={props.dnt}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
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
           <p>Comments will come here</p>
        </CardContent>
      </Collapse>
    </Card>



    
    </>)
}

export default BlogsCard;
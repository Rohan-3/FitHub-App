import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



const CommentsCard=(props)=> {
    const [color,setColor]=React.useState();

    React.useEffect(()=>{
        let hex = Math.floor(Math.random()* 0xFFFFFF);
        let color = "#" + hex.toString(16).substring(-6);
        setColor(color)
      },[])

  return (
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
          {props.comment}
        </Typography>
      </CardContent>
      
    </Card>
  );
}


export default CommentsCard;
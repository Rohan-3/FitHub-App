import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



const CommentsCard=(props)=> {
    const [color,setColor]=React.useState();

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

  return (
    <Card sx={{ maxWidth:"70%", height:"auto", marginTop:"20px", }}>
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
        <Typography variant="body2" color="black" marginLeft={"52px"}>
          {props.comment}
        </Typography>
      </CardContent>
      
    </Card>
  );
}


export default CommentsCard;
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Players =(props)=>{
       return(
           <div>
            <Typography variant="h4" align="center" >
            Players:   </Typography>
               {props.players.map(player => 
            <Card sx={{ m: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" color="primary">
            {player.name} 
            </Typography>

          </CardContent>
        </CardActionArea> 
       </Card>
              )};
           </div>);
}

export default Players;
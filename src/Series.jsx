import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import moment from 'moment';
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const Series =(props)=>{
       return(
           <div>
             {props.series.map(serie => 
            <Card sx={{ m: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" component="div" align="center" color="primary">
            Series : {serie.full_name} 
            </Typography>
            <Typography variant="h6" component="div" align="center">
            FROM: {moment(serie.begin_at).format("DD/MM/YYYY h:mm a")} {serie.end_at?" TO: "+moment(serie.end_at).format("DD/MM/YYYY h:mm a"):""}  
            </Typography>
          </CardContent>
        </CardActionArea>
       {serie.winner_id? <Button variant="Button" >
      <Link to={{pathname:"/teams/"+serie.winner_id}}>Vainqueur</Link>
      </Button>:<br/>}
      </Card>
              )};
           </div>);
}

export default Series;
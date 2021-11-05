import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Players from "../Players";

class TeamDetail extends Component {

  state={
    team:{},
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer x0imYJWJdBbYY-RRf5hdcZ4e-1wQafR2dvBqHqiy2Ml7LgvyEJs',

      }
    },
    videogame:{},
    players:[],
  };
componentDidMount= () => {
    fetch('https://api.pandascore.co/teams/'+this.props.match.params.teamId,this.state.options)
    .then(response =>  response.json())
    .then(res => this.setState({team:res,videogame:res.current_videogame,players:res.players})) 
    .catch(err => console.error(err));
}
 
     render(){ 
       return(
        <Grid container justifyContent="center" mt={5}>
        <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            image={this.state.team.image_url}
          />
          <CardContent>
            <Typography variant="h4" component="div" align="center"> 
            {this.state.team.name}
            </Typography><br/><br/>
            <Typography variant="h5" align="center">
            Game :{this.state.videogame.name}  </Typography>
            <Players players={this.state.players}/>
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
       )} 
}

export default TeamDetail;
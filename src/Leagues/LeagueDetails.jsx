import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Series from "../Series";

class LeagueDetails extends Component {

  state={
    league: {},
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer x0imYJWJdBbYY-RRf5hdcZ4e-1wQafR2dvBqHqiy2Ml7LgvyEJs',
      }
    },
    series:[],
    videogame:{},
  };

  componentDidMount= () => {
    fetch('https://api.pandascore.co/leagues/'+this.props.match.params.leagueId,this.state.options)
    .then(response =>  response.json())
    .then(res => this.setState({league:res,videogame:res.videogame,series:res.series}) )
    .catch(err => console.error(err));
  } 
        
     render(){ 

       return(
        <Grid container justifyContent="center" mt={5}>
            <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            image={this.state.league.image_url}
          />
          <CardContent>
            <Typography  variant="h4" align="center"> 
            {this.state.league.name}
            </Typography>
            <Typography variant="h5" align="center">
            Game :{this.state.videogame.name}  </Typography>
            <Series series={this.state.series} />
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
       )} 
}

export default LeagueDetails;
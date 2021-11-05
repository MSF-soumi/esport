import React, { Component } from 'react';
import League from "./League";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import List from '@mui/material/List';
import { Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

class Leagues extends Component {
    state={
      leagues:[],
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer x0imYJWJdBbYY-RRf5hdcZ4e-1wQafR2dvBqHqiy2Ml7LgvyEJs',
      }
    },
    currentPage: 1,
    };

    componentDidMount= () => {
        
        fetch('https://esport-peue9cr4v-msf-soumi.vercel.app/api/leagues?sort=&page='+this.state.currentPage+'&per_page=5', this.state.options)
        .then(response =>  response.json())
        .then(response => {console.log(response); this.setState({leagues:response});})
        .catch(err => console.error(err));
    } 

    handleClick=(event,value)=> {
      this.setState({
        currentPage: value
      });
      this.componentDidMount();
    }
     render() {
        return(
            <Container maxWidth="xs">
            <Typography variant="h5">
             <h3>Leagues</h3>
             </Typography>
             <Typography variant="h4" component="h2">
             <List sx={{ width: '100%', bgcolor: 'background.paper'}}>
              {this.state.leagues.map(league => <League key={league.id} id={league.id} name={league.name} logo={league.image_url}/>)}
              </List>
              </Typography> <br/><br/> <br/> 
              <Pagination count={40} color="primary" page={this.state.currentPage} onChange={this.handleClick}/>
            </Container>
        )}
}

export default Leagues;
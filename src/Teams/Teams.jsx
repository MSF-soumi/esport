import React, { Component } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import List from '@mui/material/List';
import { Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Team from './Team';


class Teams extends Component {

    state={
      teams:[],
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
        
        fetch('https://api.pandascore.co/teams?sort=&page='+this.state.currentPage+'&per_page=5', this.state.options)
        .then(response =>  response.json())
        .then(response => {console.log(response); this.setState({teams:response});})
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
             <h3>Teams</h3>
             </Typography>
             <Typography variant="h4" component="h2">
             <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {this.state.teams.map(team => <Team key={team.id} id={team.id} name={team.name} logo={team.image_url}/> )}
              </List>
              </Typography> <br/><br/> <br/> 
              <Pagination count={40} color="primary" page={this.state.currentPage} onChange={this.handleClick}/>
            </Container>
        )};
}

export default Teams;
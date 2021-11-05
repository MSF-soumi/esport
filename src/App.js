import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Leagues from './Leagues/Leagues';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeagueDetails from './Leagues/LeagueDetails';
import Teams from './Teams/Teams';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import TeamDetail from './Teams/TeamDetail';

function App() {
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar variant="dense" style={{
                  display: "flex",
                  justifyContent:"space-around"
                }} >
          <Typography variant="h6" color="inherit" component="div">
            A-Sport Démo UBO
          </Typography>
          <div>
          <Link href="/teams">
              <Button
                style={{
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  margin:"4px"
                }}    
              >
                TEAMS
              </Button>
            </Link>
            <Link href="/leagues">
              <Button
                style={{
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  margin:"4px"
                }}
              >
                LEAGUES
              </Button>
            </Link>
            </div>
        </Toolbar>
      </AppBar>
    </Box>

    <Router>
      <Switch>
      <Route exact path="/leagues">
        <Leagues/>
      </Route>  
      <Route exact path="/">
        <Redirect to="/leagues" />
      </Route>
      <Route exact path="/leagues/:leagueId" component={LeagueDetails}/>
      <Route exact path="/teams">
        <Teams/>
      </Route> 
      <Route exact path="/teams/:teamId" component={TeamDetail}/>
      </Switch>  
    </Router>
    </div>
  );
}

export default App;

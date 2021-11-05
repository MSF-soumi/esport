import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const League = (props) => {
const link="/leagues/"+props.id;
  
    return(
      <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar alt="logo" src={props.logo}/>
        </ListItemAvatar>
        <ListItemText primary={props.name}  />
      </ListItem>
      <Button variant="text" style={{
         padding:"0.35em 1.2em",
         border:"0.1em solid blue",
         margin:"0 0.3em 0.3em 0",
         color:"blue",
         transition: "all 0.2s",
         width:"100%",}}>
      <Link to={link} style={{textDecoration:"none",}}>Details</Link>
      </Button>
      </div>
  
    );
}

export default League;



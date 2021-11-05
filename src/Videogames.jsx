import React from "react";
import Typography from '@mui/material/Typography';

const Videogames=(props)=>{
    return(
        <div>
            <Typography variant="h5"  align="center">
            Game :{props.game.name}  </Typography>
        </div>       
    );
}

export default Videogames;
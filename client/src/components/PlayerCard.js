import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 100,
    width: 100,
    padding: 40,
    paddingTop: 2,
    margin: 15,
    marginTop: 25
  }
}));

const PlayerCard = props => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            {props.players.map(player => (
              <Grid conatiner spacing={5}>
                <Paper className={classes.paper}>
                  <p data-testid="playerName">{player.name}</p>
                  <p data-testid="playerCountry">{player.country}</p>
                  <p data-testid="searchText">Searches:{player.searches}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerCard;

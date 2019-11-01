import React from "react";
import axios from "axios";
import Playercard from "./PlayerCard";




class Players extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(error => console.log("ERROR", error));
  }

  
  render() {
    if (!this.state.players) {
      return <div>loading player data...</div>;
    }

    return (
      <div data-testid="Playercard" >
        <h1 data-testid="header">Womens World Cup Seartch Interest</h1>
            <Playercard
              players={this.state.players}
              name={this.state.players.name}
              country={this.state.players.country}
              searches={this.state.players.searches}
              id={this.state.players.id}
            />
      </div>
    );
  }
}

export default Players;

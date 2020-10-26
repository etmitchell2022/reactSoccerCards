import React from "react";
import "./App.css";

//https://apiv2.apifootball.com/?action=get_players&player_name=messi lionel&APIkey=8618e400f6a13a88d67d7ef90ac05328e76c86a496361783faec24fa25241d91

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      names: "",
    };

    this.getPLayerName = this.getPLayerName.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://apiv2.apifootball.com/?action=get_players&player_name=pogba paul&APIkey=8618e400f6a13a88d67d7ef90ac05328e76c86a496361783faec24fa25241d91"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data,
        });
        console.log(data);
      });
  }

  getPLayerName(event) {
    this.setState({ names: event.target.value });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <div className="form">
            <form>
              <input
                className="nameInput"
                placeholder="Enter Player Name"
                type="text"
                names={this.state.names}
              ></input>
              <div className='button'>
                <button type="submit">Click to Search</button>
              </div>
            </form>
          </div>
          {items.map((player) => (
            <div className="cards" key={player.player_key}>
              <div className="info">
                <div className="name">
                  <h2>{player.player_name}</h2>
                </div>
                <div className="number">
                  <h1>Number: </h1>
                  <h2>{player.player_number}</h2>
                </div>
                <div className="country">
                  <h1>Country: </h1>
                  <h2>{player.player_country}</h2>
                </div>
                <div className="position">
                  <h1>Position: </h1>
                  <h2>{player.player_type}</h2>
                </div>
                <div className="age">
                  <h1>Age: </h1>
                  <h2>{player.player_age}</h2>
                </div>
                <div className="matchesPlayed">
                  <h1>Matches Played: </h1>
                  <h2>{player.player_match_played}</h2>
                </div>
                <div className="goals">
                  <h1>Goals Scored: </h1>
                  <h2>{player.player_goals}</h2>
                </div>
                <div className="teamName">
                  <h1>Team Name: </h1>
                  <h2>{player.team_name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default App;

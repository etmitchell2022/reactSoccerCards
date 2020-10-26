import React from 'react'
import './App.css'
import Player from './Player'

class App extends React.Component {
    constructor() {
        super(props);
        this.state = {
            player: []
        };
    }

    componentDidMount() {
        fetch('https://apiv2.apifootball.com/?action=get_players&player_name=ronaldo cristiano&APIkey=8618e400f6a13a88d67d7ef90ac05328e76c86a496361783faec24fa25241d91')
        .then(res => res.json())
        .then((data) => {
            this.setState({players: data})
        })
        .catch(console.log)
    }
    render() {
        return(
            <Player player={this.state.player} />
        )
    }
}
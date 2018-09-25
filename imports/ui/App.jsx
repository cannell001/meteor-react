import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import uuid from 'uuid';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import New from './New';

export default class App extends Component {
    state = {
        players: [
            {
              _id: uuid(),
              name: "Manny Henri",
              ballManipulation: 2,
              kickingAbilities: 3,
              passingAbilities: 1,
              duelTackling: 1,
              fieldCoverage: 3,
              blockingAbilities: 2,
              gameStrategy: 3,
              playmakingRisks: 2,
            },
            {
              _id: uuid(),
              name: "Speedy Gonz",
              ballManipulation: 2,
              kickingAbilities: 3,
              passingAbilities: 1,
              duelTackling: 1,
              fieldCoverage: 3,
              blockingAbilities: 2,
              gameStrategy: 3,
              playmakingRisks: 2,
            },
            {
              _id: uuid(),
              name: "Tracey Good",
              ballManipulation: 2,
              kickingAbilities: 3,
              passingAbilities: 1,
              duelTackling: 1,
              fieldCoverage: 3,
              blockingAbilities: 2,
              gameStrategy: 3,
              playmakingRisks: 2,
            }
        ]
    };

    addPlayer = (player) => {
    player._id = uuid();
    console.log(player._id);
    let players = [...this.state.players, player];
    this.setState({
      players: players
    });
    console.log(this.state);
  }

    renderPlayers() {
      return this.state.players.map((player) => (
        <TeamList key={player._id} player={player} />
      ));
    }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7" ><Player /></div>
                <div className="col s12 m5" >
                    <h2>Team List</h2><Link to="/new" className="waves-effect waves-light btn">Add Player</Link>
                    <Divider/>
                      <List>
                        {this.renderPlayers()}
                      </List>
                    <Divider/>
                </div>
            <div className="col s12 m5" ><TeamStats /></div>
            {/* <New addPlayer={this.addPlayer}/> */}
            
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

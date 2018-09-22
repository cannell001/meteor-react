import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {

    getPlayers() {
      return [
        {
          _id: 1,
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
          _id: 2,
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
          _id: 3,
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
      ];
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
            <div className="col s12 m5" ><TeamStats /></div>
            <div className="col s12 m5" ><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

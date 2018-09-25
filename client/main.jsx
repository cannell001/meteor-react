import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import Player from '../imports/ui/Player.jsx';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';


Meteor.startup(() => {

  render((
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/new" render={props => <New addPlayer = {this.addPlayer} />} />
        <Route component={Lost}/>
      </Switch>
    </Router>
  ), document.getElementById('render-target'));
});

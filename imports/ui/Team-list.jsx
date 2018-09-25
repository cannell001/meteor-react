import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class TeamList extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.player._id}
        leftAvatar={<Avatar src="player.jpg"/>}
        />
    )
  }
}

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

class New extends Component {

    state = {
        _id: uuid(),
        name: "",
        team: "",
        ballManipulation: 0,
        kickingAbilities: 0,
        passingAbilities: 0,
        duelTackling: 0,
        fieldCoverage: 0,
        blockingAbilities: 0,
        gameStrategy: 0,
        playmakingRisks: 0
  }
  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

    submitPlayer = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state);
        console.log(this.state);
        this.props.history.push('/');
    }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer}>
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" id="name" onChange={this.handleChange} type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" id="team" onChange={this.handleChange} type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" onChange={this.handleChange} id="ballManipulation">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Kicking Abilities</h5>
              <select className="browser-default" onChange={this.handleChange} id="kickingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Passing Abilities</h5>
              <select className="browser-default" onChange={this.handleChange} id="passingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Duel - Tackling</h5>
              <select className="browser-default" onChange={this.handleChange} id="duelTackling">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Field Coverage - speed</h5>
              <select className="browser-default" onChange={this.handleChange} id="fieldCoverage">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" onChange={this.handleChange} id="blockingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Game Strategy</h5>
              <select className="browser-default" onChange={this.handleChange} id="gameStrategy">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Playmaking Risks</h5>
              <select className="browser-default" onChange={this.handleChange} id="playmakingRisks">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" id="notes" className="materialize-textarea"/>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default withRouter(New);

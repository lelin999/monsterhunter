import React, { Component } from 'react';
import AutosuggestComponent from './AutosuggestComponent.js';

const quests = [];

class SpeedrunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted_by: '',
      duration: '',
      hunters: '',
      quest_id: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestChange = this.handleQuestChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange = (event) => {
    this.setState({submitted_by: event.target.value});
  }

  handleQuestChange = (event, { newValue }) => {
    this.setState({quest_id: newValue});
  }

  handleTimeChange = (event) => {
    this.setState({duration: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //trim a little just in case
    let submitted_by = this.state.submitted_by.trim();
    // let quest_id = this.state.quest_id;
    let duration = this.state.duration;
    this.props.onSpeedrunSubmit({submitted_by: submitted_by, duration: duration});
    this.setState({submitted_by: '', quest_id: '', duration: ''});
  }

  render() {
    return (
      <div className="SpeedrunForm">
        <form onSubmit={ this.handleSubmit }>
          <input
            placeholder="Username"
            onChange={ this.handleNameChange }
          />
          <AutosuggestComponent />
          {this.props.questsData}
          <input
            placeholder="Time"
            onChange={ this.handleTimeChange }
          />
          <input
            type="submit"
            className="add-quest-button"
            value="Submit Speedrun!"
          />
        </form>
      </div>
    );
  }
}

export default SpeedrunForm;
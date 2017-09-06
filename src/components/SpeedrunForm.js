import React, { Component } from 'react';

class SpeedrunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      quest: '',
      time: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestChange = this.handleQuestChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleQuestChange = (event) => {
    this.setState({quest: event.target.value});
  }

  handleTimeChange = (event) => {
    this.setState({time: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="SpeedrunForm">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            onChange={this.handleNameChange}
          />
          <input
            placeholder="Quest Name"
            onChange={this.handleQuestChange}
          />
          <input
            placeholder="Time"
            onChange={this.handleTimeChange}
          />
          <input
            type="submit"
            className="add-quest-button"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default SpeedrunForm;
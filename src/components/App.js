import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuest } from "../actions";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: '',
      time: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Monster Hunter Quests Speedrunning
        </div>
        <button
          type="button"
          className="add-quest-button"
          onClick={() => this.addQuest()}
        >
          Add a Quest!
        </button>
      </div>
    );
  }
}

export default App;

//strings of names of quests in an API/arrayx
//last 5-10 entries displayed from MongoDB
// -> entry time, entry itself, entryID, entry entered
//particular monster (relating to quest)/quest/ranks
// autocomplete -> shows up relevant quests relating to input

//react-routing,  
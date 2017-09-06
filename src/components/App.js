import React, { Component } from 'react';
import axios from 'axios';

import QuestList from './QuestList.js'
import Speedruns from './Speedruns.js';
import SpeedrunForm from './SpeedrunForm.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questsData: [],
      speedRunningData: []
    }
    this.loadQuests = this.loadQuests.bind(this);
    //this.loadSpeedRunnings = this.loadSpeedRunnings.bind(this);
  }

  loadQuests = () => {
    axios.get(this.props.url).then(res => {
      this.setState({data: res.data});
    })
  }

  componentDidMount() {
    this.loadQuests();
  }

  render() {
    return(
      <div className="App">
       <div className="title">
          Monster Hunter Quests Speedrunning
        </div>
        <QuestList data={ this.state.questsData } />
        <Speedruns data={ this.state.speedRunningData } />
        <SpeedrunForm />
      </div>
    )
  }
}

export default App;

//strings of names of quests in an API/arrayx
//last 5-10 entries displayed from MongoDB
// -> entry time, entry itself, entryID, entry entered
//particular monster (relating to quest)/quest/ranks
// autocomplete -> shows up relevant quests relating to input

//react-routing,  
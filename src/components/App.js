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
      speedRunningData: [],
      newSpeedrunData: []
    }
    this.loadQuests = this.loadQuests.bind(this);
    this.loadSpeedruns = this.loadSpeedruns.bind(this);
    this.handleSpeedrunSubmit = this.handleSpeedrunSubmit.bind(this);
  }

  loadQuests = () => {
    axios.get("http://localhost:8000/quests").then(res => {
      this.setState({questsData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  loadSpeedruns = () => {
    axios.get("http://localhost:8000/speedruns/all").then(res => {
      this.setState({speedRunningData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  handleSpeedrunSubmit = (speedrun) => {
    axios.post("http://localhost:8000/speedruns/new").then(res => {
      this.setState({newSpeedrunData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  componentDidMount() {
    this.loadQuests();
    this.loadSpeedruns();
    console.log(this.state, "state");
  }

  render() {
    return(
      <div className="App">
       <div className="title">
          Monster Hunter Quests Speedrunning
        </div>
        <QuestList data={ this.state.questsData } />
        <Speedruns data={ this.state.speedRunningData } />
        <SpeedrunForm onSpeedrunSubmit={ this.handleSpeedrunSubmit } />
      </div>
    )
  }
}

export default App;
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


//tie below to a handle
  handleSpeedrunSubmit = (speedrun) => {
    let speedRuns = this.state.speedRunningData;
    let newSpeedRuns = speedRuns.concat([speedrun]);
    this.setState({speedRunningData: newSpeedRuns});
    axios.post("http://localhost:8000/speedruns/new", speedrun).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("error", err);
      this.setState({speedRunningData: speedRuns});
    })
    console.log(this.state, "handleSubmit state");
  }

  componentDidMount() {
    this.loadQuests();
    this.loadSpeedruns();
  }

  render() {
    return(
      <div className="App">
        <div className="title">
          Monster Hunter Quests Speedrunning
        </div>
        <QuestList data={ this.state.questsData } />
        <SpeedrunForm onSpeedrunSubmit={ this.handleSpeedrunSubmit } questsData={ this.state.questsData }/>
        <Speedruns data={ this.state.speedRunningData } />
      </div>
    )
  }
}

export default App;
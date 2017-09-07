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
      this.setState({questsData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  componentDidMount() {
    this.loadQuests();
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
        <SpeedrunForm />
      </div>
    )
  }
}

export default App;
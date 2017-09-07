import React, { Component } from 'react';
import Quest from './Quest.js';

class QuestList extends Component {
  render() {
    let quests = this.props.data.map(quest => {
      return(
        <Quest name={ quest.name } type={ quest.type } rank={ quest.rank } key= { quest.id } >
          { quest.name }
          { quest.type }
          { quest.rank }
        </Quest>
      )
    });

    return(
      <div className="QuestList">
        quests stuff would go here
      </div>
    )
  }
};

export default QuestList;
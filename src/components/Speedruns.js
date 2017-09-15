import React, { Component } from 'react';
import DataOutput from './DataOutput.js';

class Speedruns extends Component {
  render() {
    let outputTab = this.props.data.map(output => {
      return (
        <DataOutput submitted_by={ output.submitted_by } quest_id={ output.quest_id } duration={ output.duration } key={ output["_id"] } >
          { output["_id"] }
          { output.submitted_by }
          { output.quest_id }
          { output.duration }
        </DataOutput>
      )
    })
    return (
      <div className="Speedruns">
        { outputTab }
      </div>
    );
  }
}

export default Speedruns;
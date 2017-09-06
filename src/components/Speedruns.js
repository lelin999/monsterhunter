import React, { Component } from 'react';
import DataOutput from './DataOutput.js';

class Speedruns extends Component {
  render() {
    let outputTab = this.props.data.map(output => {
      return (
        <DataOutput user={ output.username } quest={ output.quest } time={ output.time } key={ output.id } >
          { output.username }
          { output.quest }
          { output.time }
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
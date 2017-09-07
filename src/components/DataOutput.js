import React, { Component } from 'react';

class DataOutput extends Component {
  render() {
    return(
      <div className="DataOutput">
        { this.props.submitted_by } { this.props.duration }
      </div>
    )
  }
}

export default DataOutput;
import React, { Component } from 'react';

class Quest extends Component {
  render() {
    return(
      <div className="Quest">
        { this.props.name } { this.props.type } { this.props.rank }
      </div>
    )
  }
}

export default Quest;
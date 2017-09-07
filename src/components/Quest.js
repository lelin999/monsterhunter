import React, { Component } from 'react';

class Quest extends Component {
  render() {
    return(
      <div className="Quest">
        { this.props.name }
      </div>
    )
  }
}

export default Quest;
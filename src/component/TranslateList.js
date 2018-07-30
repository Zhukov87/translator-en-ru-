import React, { Component } from "react";

class TranslateList extends Component {
  render() {
    const { pair } = this.props;
    return (
      <div>
        <p>
          <h3>Text</h3>
          {pair[0]}
        </p>
        <p>
          <h3>Translate</h3>
          {pair[1]}
        </p>
      </div>
    );
  }
}

export default TranslateList;

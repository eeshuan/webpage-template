import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
  constructor(public props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Hazelnut
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.querySelector('#main'));
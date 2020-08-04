import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return  (
      <h1> Gello </h1>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

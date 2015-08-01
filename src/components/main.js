import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>Example boo</h1>
        <Link to='example'>Go to Example page...</Link>
        <RouteHandler />
      </div>
    );
  }

}

export default Main;

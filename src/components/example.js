import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from 'stores/dummyStore';
import DummyActions from 'actions/dummyActions';

import Select from 'components/select';

@connectToStores
class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  static getStores(props) {
    return [DummyStore];
  }

  static getPropsFromStores(props) {
    return DummyStore.getState();
  }

  render() {
    return (
      <div className={this.props.color}>

        <input type="text" value={this.state.name} onChange={this.changeName}/>
        <h1>It works: {this.props.name}</h1>

        <div>
          <Select /> - change the text color by selecting an options.

        </div>

      </div>
    );
  }

  changeName = evt => {
    this.setState({name: evt.target.value});
    DummyActions.updateName(evt.target.value);
  }

}

export default Example;

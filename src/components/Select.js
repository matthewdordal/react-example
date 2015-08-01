import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from 'stores/dummyStore';
import DummyActions from 'actions/dummyActions';

@connectToStores
class Select extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colorOptions
    }
  }

  static getStores(props) {
    return [DummyStore];
  }

  static getPropsFromStores(props) {
    return DummyStore.getState();
  }

  render() {
    var colors = this.props.colorOptions;

    return (
      <select onChange={this.changeColor}>
        <option value=""></option>
        {
          colors.map( item => <option value={item}>{item}</option> )
        };
      </select>
    )
  }

  changeColor = evt => {
    DummyActions.updateColor(evt.target.value);
  }

}

export default Select;

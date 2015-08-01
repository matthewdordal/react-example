import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/dummyActions';

@createStore(flux)
class DummyStore {

  constructor() {
    this.name = 'awesome';
    this.colorOptions = ['red', 'green', 'blue'];
    this.color = '';
  }

  @bind(actions.updateName)
  updateName(name) {
    this.name = name;
  }

  @bind(actions.updateColor)
  updateColor(color) {
    this.color = color;
  }

}

export default DummyStore;
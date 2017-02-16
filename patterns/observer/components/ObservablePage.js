const ObserversCollection = require('./ObserversCollection');

class ObservablePage {
  constructor() {
    this.observers = new ObserversCollection();
  }

  addObserver(observer) {

  }

  notify(context) {

  }

  update() {

  }
}

module.exports = ObservablePage;
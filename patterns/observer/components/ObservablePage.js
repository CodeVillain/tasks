const ObserversCollection = require('./ObserversCollection');
const Page = require('./Page');

class ObservablePage {
  constructor() {
    this.observers = new ObserversCollection();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  notify(context) {
    const observerCount = this.observers.count();

    for (let i = 0; i < observerCount; i++) {
      this.observers.getByIndex(i)(context);
    }
  }

  update() {
    this.notify(this);
    console.log('observable notify');
  }
}

module.exports = ObservablePage;
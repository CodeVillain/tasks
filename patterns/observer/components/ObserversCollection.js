class ObserversCollection {
  constructor () {
    this.observers = [];
  }

  add(object) {
    return this.observers.push(object);
  }

  getByIndex(index) {
    if (index !== -1 && this.observers.length > 0) {
      return this.observers[index];
    }
  }

  getAll() {
    return this.observers;
  }

  count() {
    return this.observers.length;
  }
}

module.exports = ObserversCollection;
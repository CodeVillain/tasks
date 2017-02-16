const ObservablePage = require('./ObservablePage');

class Page extends ObservablePage {
  constructor({ title = '' }) {
    super();

    this.title = title;
  }

  update() {
    super.update();
    console.log('Page is updated!', this.title);
  }
}

module.exports = Page;
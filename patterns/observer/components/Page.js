class Page {
  constructor({ title = '' }) {
    this.title = title;
  }

  update() {

    console.log('Page is updated!', this.title);
  }
}

module.exports = Page;
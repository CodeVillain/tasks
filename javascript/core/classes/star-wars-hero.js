class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //...
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('hero');
    element.innerHTML = `
      <h3 class="hero-name">${this.name}</h3>
      <div class="hero-age">${this.age}</div>
    `;

    return element;
  }
}
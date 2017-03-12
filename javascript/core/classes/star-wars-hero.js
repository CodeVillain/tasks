class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //...
  }

  // get age() {
  //   return this._age;
  // }
  //
  // set age(newAge) {
  //   return this._age = newAge;
  // }

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

const luke = new Hero('Luke', 22);

// luke.age = 23;
// console.log(luke.age);
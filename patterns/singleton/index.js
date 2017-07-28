class Singleton {
  constructor() {
    this.time = new Date();
  }
}

const singleton = new Singleton();
console.log(singleton.time);

setTimeout(() => {
  const singleton2 = new Singleton();
  console.log(singleton2.time);
}, 4000);
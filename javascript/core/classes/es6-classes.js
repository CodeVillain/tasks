class Star {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  explode() {
    return 'Big badaboom!';
  }
}

const sun = new Star('Sun', 5000000000);
console.log('Sun explosion', sun.explode());


class DeathStar extends Star {

  constructor(name, age, destruction) {
    super(...arguments);
    this.destruction = destruction;
  }

  piupiu() {
    return 'Big piu-piu!!!';
  }
}

const firstDeathStar = new DeathStar('Death Star', 50, 100500100500);

console.log(firstDeathStar);
function Star(name, age) {
  this.name = name;
  this.age = age;
}

Star.prototype.explode = function () {
  return 'Big badaboom!';
};

const sun = new Star('Sun', 5000000000);

console.log('Sun explosion', sun.explode());



function DeathStar(name, age, destruction) {
  Star.apply(this, arguments);
  this.destruction = destruction;
}

DeathStar.prototype = Object.create(Star.prototype);
DeathStar.prototype.constructor = DeathStar;

DeathStar.prototype.piupiu = function () {
  return 'Big piu-piu!!!';
};

const firstDeathStar = new DeathStar('Death Star', 50, 100500100500);

console.log(firstDeathStar);

function Star(name, age) {
  this.name = name;
  this.age = age;

  this.explode = function () {
    return 'Big badaboom!';
  }
}

const sun = new Star('Sun', 5000000000);

console.log(sun.explode());

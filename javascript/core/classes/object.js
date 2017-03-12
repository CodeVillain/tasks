const velchik = {
  wheels: 2,
  brakes: 2,
  steeringWheel: 1
};

const coolVelchik = Object.create(velchik);

console.log(coolVelchik.wheels);

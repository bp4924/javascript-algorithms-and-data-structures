// Kepler's Third Law:
// T = 2PI(sqrt of (the distance between the objects, cubed divided by the standard gravitational parameter )

function orbitalPeriod(arr) {
  // global scope values
  const GM = 398600.4418; // standard gravitational parameter
  const earthRadius = 6367.4447;
  const twoPI = Math.PI * 2;
  const result = [];

  const getOrbitPeriod = (obj) => {
    // compute object data
    // creat local variables for clarity in the computation

    const distance = obj.avgAlt + earthRadius; // distance between centers

    const dCube = Math.pow(distance, 3);
    const period = Math.round(twoPI * Math.sqrt(dCube / GM));

    return { name: obj.name, orbitalPeriod: period };
  };

  for (let elem in arr) {
    result.push(getOrbitPeriod(arr[elem]));
    // this calls getOrbitPeriod() until you run out of elements and adds it to the result array
  }

  return result;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

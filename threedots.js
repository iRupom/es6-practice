const friendAges = [10, 12, 13, 15];
const seniorAges = [23, 24, 25, 26, 27];
const murobbiAges = [34, 35, 36];

const allAges = friendAges.concat(seniorAges).concat(200).concat(murobbiAges);
const allAges2 = [...friendAges, ...seniorAges, 200, 100, 300, ...murobbiAges];
// const allAges3 = [friendAges, seniorAges, 5, murobbiAges];
const maximum = Math.max(30, 40, 50);
const maximum2 = Math.max(...friendAges,...seniorAges,...murobbiAges);

console.log(allAges);
console.log(allAges2);
// console.log(allAges3);
console.log(maximum);
console.log(maximum2);
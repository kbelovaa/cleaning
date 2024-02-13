const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const createOpions = (option) =>
  Array(12)
    .fill()
    .map((_, i) => `${i + 1} ${i === 0 ? option : `${option}s`}`);

const livingRooms = createOpions('living room');
const bedrooms = createOpions('bedroom');
const bathrooms = createOpions('bathroom');
const kitchens = createOpions('kitchen');

const speedOptions = ['x1', 'x2', 'x3'];
const speedCoeff = [1, 1.2, 1.5];

const repeats = ['One-time', 'Weekly', 'Every 2 weeks', 'Monthly', 'Custom schedule'];

const times = [];

for (let hours = 0; hours <= 23; hours++) {
  for (let minutes = 0; minutes < 60; minutes += 30) {
    const hourStr = hours.toString().padStart(2, '0');
    const minuteStr = minutes.toString().padStart(2, '0');
    times.push(`${hourStr}:${minuteStr}`);
  }
}

const knowingWays = ['Google', 'Facebook', 'Instagram', 'Friend', 'Neighbour'];

const weekdays = [
  { name: 'monday', index: 1 },
  { name: 'tuesday', index: 2 },
  { name: 'wednesday', index: 3 },
  { name: 'thursday', index: 4 },
  { name: 'friday', index: 5 },
  { name: 'saturday', index: 6 },
  { name: 'sunday', index: 0 },
];

export {
  months,
  livingRooms,
  bedrooms,
  bathrooms,
  kitchens,
  speedOptions,
  speedCoeff,
  repeats,
  times,
  knowingWays,
  weekdays,
};

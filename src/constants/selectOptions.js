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

const cleaningTypes = [
  {
    type: 'Basic',
    price: 50,
    description: 'basicCleaningInfo',
  },
  {
    type: 'Detailed',
    price: 100,
    description: 'detailedCleaningInfo',
  },
  {
    type: 'Move in/out',
    price: 200,
    description: 'moveInOutCleaningInfo',
  },
  {
    type: 'After builders',
    price: 250,
    description: 'afterBuildersCleaningInfo',
  },
  {
    type: 'After party',
    price: 250,
    description: 'afterPartyCleaningInfo',
  },
];

const createOpions = (option) =>
  Array(12)
    .fill()
    .map((_, i) => `${i + 1} ${i === 0 ? option : `${option}s`}`);

const bedrooms = createOpions('bedroom');
const bathrooms = createOpions('bathroom');
const kitchens = createOpions('kitchen');

const roomsPrices = [5, 10, 10];

const extraServices = [
  { name: 'Inside fridge', price: 10 },
  { name: 'Inside oven', price: 15 },
  { name: 'Inside dishwasher', price: 10 },
  { name: 'Inside washer', price: 15 },
  { name: 'Inside dryer', price: 10 },
  { name: 'Inside microwave', price: 10 },
  { name: 'Inside kitchen cabinets', price: 5 },
  { name: 'Inside windows', price: 15 },
  { name: 'Tile walls', price: 20 },
];

const speedOptions = ['x1', 'x2', 'x3'];
const speedCoeff = [1, 1.2, 1.5];

const repeats = ['One-time', 'Weekly', 'Every 2 weeks', 'Monthly', 'Custom schedule'];

const times = [];

for (let hours = 0; hours <= 23; hours++) {
  for (let minutes = 0; minutes < 60; minutes += 15) {
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
  cleaningTypes,
  bedrooms,
  bathrooms,
  kitchens,
  roomsPrices,
  extraServices,
  speedOptions,
  speedCoeff,
  repeats,
  times,
  knowingWays,
  weekdays,
};

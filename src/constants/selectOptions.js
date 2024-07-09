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
  Array(13)
    .fill()
    .map((_, i) => `${i} ${i === 1 ? option : `${option}s`}`);

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
  { name: 'Monday', index: 1 },
  { name: 'Tuesday', index: 2 },
  { name: 'Wednesday', index: 3 },
  { name: 'Thursday', index: 4 },
  { name: 'Friday', index: 5 },
  { name: 'Saturday', index: 6 },
  { name: 'Sunday', index: 0 },
];

const languages = ['English', 'Spanish', 'Swedish', 'Danish', 'Norwegian', 'Dutch', 'German', 'Russian'];

const feedbacks = [
  { stars: 5, feebackKey: 'feedback1' },
  { stars: 5, feebackKey: 'feedback2' },
  { stars: 5, feebackKey: 'feedback3' },
  { stars: 5, feebackKey: 'feedback4' },
  { stars: 5, feebackKey: 'feedback5' },
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
  languages,
  feedbacks,
};

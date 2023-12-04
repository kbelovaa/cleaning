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
    duration: 3,
    description:
      'Basic cleaning starts with an assessment, followed by systematic dusting, vacuuming, and mopping. The kitchen and bathroom receive special attention, including surface sanitization. After the final touch-ups, we perform a walk-through to ensure our high standards are met, leaving your home in pristine condition.',
  },
  {
    type: 'Detailed',
    price: 100,
    duration: 5,
    description:
      'Detailed cleaning takes the BASIC cleaning to the next level, leaving no corner untouched. We meticulously clean and sanitize every surface and crevice in your home. From deep cleaning kitchen appliances to thorough dusting, we ensure that your living space is truly immaculate.',
  },
  {
    type: 'Move in/out',
    price: 200,
    duration: 5,
    description:
      'Designed for transitioning in or out of a home, this service includes a thorough cleaning of all areas, with extra attention to spaces that may have been neglected. We take care of cabinets, appliances, and ensure the entire space is ready for the next chapter.',
  },
  {
    type: 'After building',
    price: 250,
    duration: 5,
    description:
      'Perfect for post-construction or renovation clean-ups, we tackle the mess and dust left behind by builders, leaving you with a clean and comfortable environment. From cleaning surfaces to removing construction debris, we make your newly built or renovated area shine.',
  },
  {
    type: 'After party',
    price: 250,
    duration: 5,
    description:
      'After a great event, the last thing you want to do is clean up. We handle the cleanup, from removing spills and stains to general tidying up, ensuring every surface is sparkling. Allowing you to wake up to a refreshed and clean home.',
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
  { name: 'Inside wicrowave', price: 10 },
  { name: 'Inside kitchen cabinets', price: 5 },
  { name: 'Inside windows', price: 15 },
  { name: 'Tile walls', price: 20 },
];

const speedOptions = ['x1', 'x2', 'x3'];
const speedCoeff = [1, 1.2, 1.5];

const times = [];

for (let hours = 0; hours <= 23; hours++) {
  for (let minutes = 0; minutes < 60; minutes += 15) {
    const hourStr = hours.toString().padStart(2, '0');
    const minuteStr = minutes.toString().padStart(2, '0');
    times.push(`${hourStr}:${minuteStr}`);
  }
}

const frequency = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'];

const faq = [
  {
    question: 'How long is a typical cleaning service?',
    answer:
      'The duration of your cleaning service depends on your needs and the condition of your home. Basic cleanings typically require a minimum of 4 hours. For a rough estimate, consider the number of bedrooms in your home as the number of hours needed. For example, 3 bedrooms would require approximately 3 hours.',
  },
  {
    question: 'What products are used for cleaning?',
    answer:
      'We use eco-friendly products by default, but you can request different products when scheduling your cleaning.',
  },
  { question: 'Is tipping required?', answer: 'Tipping is entirely at your discretion.' },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer:
      'Our maids come fully equipped with eco-friendly cleaning products. However, we are happy to accommodate your specific product preferences.',
  },
  {
    question: 'Are house cleaning services expensive?',
    answer:
      "House cleaning services are typically affordable and vary based on your home's size and specific cleaning needs.",
  },
  {
    question: 'How often should I use house cleaning services?',
    answer: 'Most people opt for weekly, biweekly, or monthly services based on their preferences and requirements.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      "We do not have contracts for cleaning services. We simply ask for 48 hours' notice for cancellations or rescheduling. If you cancel within 48 hours, a $70 fee applies. If you cancel within 3 hours of the appointment, it is 50% of the cleaning cost. If you cancel with the cleaner present or if we are locked out, the full price will be charged.",
  },
  {
    question: 'How do I pay for my cleaning services?',
    answer: 'Payment options include Apple Pay, Mastercard, and Visa.',
  },
  { question: 'Who performs the cleaning?', answer: 'Our professional independent house cleaners handle each job.' },
  {
    question: 'How can I pay for the service?',
    answer:
      'We accept major credit cards as a form of payment. Please note that a credit card convenience fee applies, and pre-authorization of a credit card is required to confirm appointments. Receipts are emailed after each charge.',
  },
  {
    question: 'Do I need to be present during cleaning?',
    answer: 'You do not have to be present during cleaning. You can provide entry and lock-up instructions.',
  },
  {
    question: 'How can I set up regular service?',
    answer: 'To arrange regular service, please contact us by phone or email.',
  },
  { question: 'Is laundry included in house cleaning services?', answer: 'Laundry is not included in our services.' },
  {
    question: "How do I cancel or reschedule a clean if I'm unable to?",
    answer: "We require 48 hours' notice for cancellations or rescheduling to avoid fees.",
  },
  {
    question: 'Do you offer a satisfaction guarantee?',
    answer:
      'Yes, we aim for your satisfaction. If you have any concerns, please contact us within 24 hours, and we will make arrangements to address them.',
  },
  {
    question: 'Is MFP an insured business?',
    answer: 'Yes, you are automatically covered by our general liability insurance for your peace of mind.',
  },
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
  times,
  frequency,
  faq,
};

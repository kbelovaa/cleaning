import { roomsPrices } from '../constants/selectOptions';

const getRoomsNumber = (selectedOption) => selectedOption.split(' ')[0];

const calculateCleaningTypePrice = (cleaningPrice, apartmentSize, roomsNumber) => {
  let coeff;
  let pricePerSqm;
  switch (true) {
    case apartmentSize <= 50:
      coeff = 1;
      pricePerSqm = 0.1;
      break;
    case apartmentSize <= 100:
      coeff = 1.1;
      pricePerSqm = 0.12;
      break;
    case apartmentSize <= 150:
      coeff = 1.2;
      pricePerSqm = 0.15;
      break;
    case apartmentSize <= 200:
      coeff = 1.4;
      pricePerSqm = 0.2;
      break;
    case apartmentSize <= 250:
      coeff = 1.6;
      pricePerSqm = 0.4;
      break;
    case apartmentSize <= 300:
      coeff = 1.8;
      pricePerSqm = 0.6;
      break;
    case apartmentSize > 300:
      coeff = 2;
      pricePerSqm = 1;
      break;
    default:
      coeff = 1;
      pricePerSqm = 0.1;
  }

  const sizePrice = cleaningPrice * coeff + apartmentSize * pricePerSqm;

  const roomsPrice = roomsPrices.reduce(
    (currentPrice, price, currentIndex) => currentPrice + price * (getRoomsNumber(roomsNumber[currentIndex]) - 1),
    0,
  );

  return Math.round(sizePrice + roomsPrice);
};

const calculateTimeCoeff = (time) => {
  const hour = Number(time.split(':')[0]);
  let coeff;
  switch (true) {
    case hour >= 9 && hour <= 16:
      coeff = 1;
      break;
    case hour >= 17 && hour <= 19:
      coeff = 1.1;
      break;
    case hour >= 20 || hour <= 4:
      coeff = 1.25;
      break;
    case hour >= 5 && hour <= 8:
      coeff = 1.5;
      break;
    default:
      coeff = 1;
  }

  return coeff;
};

const roundPrice = (price) => price.toFixed(2).replace('.', ',');

export { calculateCleaningTypePrice, calculateTimeCoeff, roundPrice };

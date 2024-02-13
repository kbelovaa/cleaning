const getRoomsNumber = (selectedOption) => selectedOption.split(' ')[0];

const getHour = (time) => Number(time.split(':')[0]);

const getTimeCoeff = (time, dateString, timePricing) => {
  const hour = getHour(time);
  const date = dateString ? new Date(String(dateString.split('.').reverse().join('-'))).getDay() : 1;
  const isWeekend = date === 0 || date === 6;

  const timeInterval = timePricing.find((timeInt) => {
    const startHour = getHour(timeInt.startTime);
    const endHour = getHour(timeInt.endTime);
    if (startHour > endHour) {
      return isWeekend === timeInt.isWeekend && (hour >= startHour || hour <= endHour);
    }

    return isWeekend === timeInt.isWeekend && hour >= startHour && hour <= endHour;
  });

  return { coefficient: timeInterval.coefficient, tariffNumber: timeInterval.tariffNumber };
};

const getCleaningCoeff = (size, cleaningPricing) => {
  const sizeRange = cleaningPricing.find(
    (sizeRange) => size >= sizeRange.rangeStart && (size <= sizeRange.rangeEnd || !sizeRange.rangeEnd),
  );

  return sizeRange.coefficient;
};

const getSqmCoeff = (size, sqmPricing) => {
  const sizeRange = sqmPricing.find(
    (sizeRange) => size >= sizeRange.rangeStart && (size <= sizeRange.rangeEnd || !sizeRange.rangeEnd),
  );

  return sizeRange.coefficient;
};

const calculateCleaningTypePrice = (
  cleaningPrice,
  apartmentSize,
  roomsNumber,
  roomsPrices,
  cleaningPricing,
  sqmPricing,
) => {
  const coeff = getCleaningCoeff(apartmentSize, cleaningPricing);
  const pricePerSqm = getSqmCoeff(apartmentSize, sqmPricing);

  const sizePrice = cleaningPrice * coeff + apartmentSize * pricePerSqm;

  const roomsPrice = roomsPrices.reduce(
    (currentPrice, price, currentIndex) => currentPrice + price * (getRoomsNumber(roomsNumber[currentIndex]) - 1),
    0,
  );

  return Math.round(sizePrice + roomsPrice);
};

const roundPrice = (price) => price.toFixed(2).replace('.', ',');

export { getTimeCoeff, calculateCleaningTypePrice, roundPrice };

import format from 'date-fns/format';

const formatDate = (dateString) => {
  const dateParts = dateString.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day);

  const formattedDate = `${dateString}, ${format(date, 'EEEE')}`;

  return formattedDate;
};

const getDateFromDateObject = (date) => {
  const formattedDate = date.slice(0, 10).split('-').reverse().join('.');
  return formattedDate;
};

const createDateObject = (dateString) => {
  const formattedDate = `${dateString.split('.').reverse().join('-')}T00:00:00.000+00:00`;
  return formattedDate;
};

export { formatDate, getDateFromDateObject, createDateObject };

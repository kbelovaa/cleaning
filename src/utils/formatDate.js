import format from 'date-fns/format';

function formatDate(dateString) {
  const dateParts = dateString.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day);

  const formattedDate = format(date, 'MMMM, dd, EEEE');

  return formattedDate;
}

export default formatDate;

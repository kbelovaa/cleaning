import { parseISO, compareAsc, isBefore, isSameDay, parse, startOfDay } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
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

const getPaymentDate = (dateString) => {
  const date = new Date(dateString);

  date.setDate(date.getDate() - 2);

  return date.toISOString();
};

const formatNotificationDate = (dateString) => {
  const dateParts = dateString.slice(0, 10).split('-').reverse();
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month - 1, day);

  return [format(date, 'EEEE'), format(date, 'd'), format(date, 'MMMM')];
};

const getDateFromDateObject = (date) => {
  const formattedDate = date.slice(0, 10).split('-').reverse().join('.');
  return formattedDate;
};

const createDateObject = (dateString) => {
  const formattedDate = `${dateString.split('.').reverse().join('-')}T00:00:00.000+00:00`;
  return formattedDate;
};

const defineIsCleaningSoon = (date, time) => {
  const dateParts = date.split('.').map((elem) => Number(elem));
  const timeParts = time.split(':').map((elem) => Number(elem));

  const targetDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);

  const currentDate = new Date();

  const difference = targetDate.getTime() - currentDate.getTime();

  if (difference > 2 * 24 * 60 * 60 * 1000) {
    return false;
  }

  return true;
};

const filterTimes = (times) => {
  const timeZone = 'Europe/Madrid';

  const now = new Date();

  const zonedNowStr = formatInTimeZone(now, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const nowTime = parseISO(zonedNowStr);

  const isLaterThanNow = (timeStr) => {
    const compareTimeStr = formatInTimeZone(now, timeZone, `yyyy-MM-dd'T'${timeStr}:ssXXX`);
    const compareTime = parseISO(compareTimeStr);

    const result = compareAsc(compareTime, nowTime);

    return result === 1;
  };

  const filteredTimes = times.filter(isLaterThanNow);

  return filteredTimes;
};

const checkIsSameDate = (dateStr) => {
  const today = new Date();
  const date = parse(dateStr, 'dd.MM.yyyy', new Date());
  const result = isSameDay(today, date);

  return result;
};

const isTimeLessThanFiltered = (time1, time2) => {
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  const date1 = new Date(0, 0, 0, hours1, minutes1);
  const date2 = new Date(0, 0, 0, hours2, minutes2);

  if (date1 < date2) {
    return true;
  }

  return false;
};

const checkIsDateValid = (value) => {
  const date = value.split('.');
  const day = date[0];
  const month = date[1];
  const year = date[2];

  if (
    (!Number.isNaN(parseInt(day, 10)) && (parseInt(day, 10) < 1 || parseInt(date, 10) > 31)) ||
    (!Number.isNaN(parseInt(month, 10)) && (parseInt(month, 10) > 12 || parseInt(month, 10) < 1)) ||
    (!Number.isNaN(parseInt(year, 10)) &&
      year.replace(/\D/g, '').length === 4 &&
      isBefore(parse(value, 'dd.MM.yyyy', new Date()), startOfDay(new Date())))
  ) {
    return false;
  }

  return true;
};

export {
  formatDate,
  getPaymentDate,
  formatNotificationDate,
  getDateFromDateObject,
  createDateObject,
  defineIsCleaningSoon,
  filterTimes,
  checkIsSameDate,
  isTimeLessThanFiltered,
  checkIsDateValid,
};

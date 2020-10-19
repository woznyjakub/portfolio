import moment from 'moment';

import { TimeDuration } from '../models/misc';

// parses time period time to year, months and days
export const parseTimeToUnitsObject = (time: number): TimeDuration => {
  const timeDuration = moment.duration(time);

  return {
    years: timeDuration.years(),
    months: timeDuration.months(),
  };
};

export const parseTimeToString = (time: TimeDuration): string => {
  const dateString = Object.keys(time).reduce((acc, timeUnitName: string, i, array) => {
    const value: number = time[timeUnitName];
    const isPluralForm = value > 1;

    // handle singular and plural forms
    const parsedUnitName = isPluralForm ? timeUnitName : timeUnitName.substr(0, timeUnitName.length - 1);

    // put value and its label in string
    const parsedTimeString = `${value} ${parsedUnitName}`;

    const isLast = array.length - 1 === i;
    const isFirst = i === 0;
    // add comma or `and` separator and prevent adding separator before the first value
    const separator = `${!isFirst && !isLast ? ' ,' : '' || isLast ? ' and' : ''}`;

    // handle non-positive values
    const readyStringPart = value > 0 ? `${separator} ${parsedTimeString}` : '';

    return `${acc}${readyStringPart}`;
  }, '');

  return dateString;
};

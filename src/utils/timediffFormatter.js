/* eslint-disable import/no-extraneous-dependencies */
import timediff from 'timediff';

const timeDiffFormatter = (time) => timediff(time, new Date(), (result) => {
  if (result.years !== 0) {
    return `${result.years} years ago`;
  }
  if (result.months !== 0) {
    return `${result.months} months ago`;
  }
  if (result.days !== 0) {
    return `${result.days} days ago`;
  }
  if (result.hours !== 0) {
    return `${result.hours} hours ago`;
  }

  if (result.minutes !== 0) {
    return `${result.minutes} minutes ago`;
  }

  return 'Few Seconds Ago';
});

export default timeDiffFormatter;

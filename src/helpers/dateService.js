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

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  let hour = date.getHours();
  const minute = date.getMinutes();
  let period = 'AM';

  if (hour >= 12) {
    period = 'PM';
    if (hour > 12) {
      hour -= 12;
    }
  }

  return `${month} ${day}, ${year} at ${hour}:${minute
    .toString()
    .padStart(2, '0')} ${period}`;
}

export function formatShortDate(timestamp) {
  const today = new Date();
  const date = new Date(timestamp);
  const isToday = date.toDateString() === today.toDateString();

  if (isToday) {
    let hour = date.getHours();
    let period = 'AM';

    if (hour >= 12) {
      period = 'PM';
      if (hour > 12) {
        hour -= 12;
      }
    }

    return `${hour}:${date.getMinutes().toString().padStart(2, '0')} ${period}`;
  } else {
    return `${date.getMonth() + 1}/${date.getDate()}/${date
      .getFullYear()
      .toString()
      .slice(-2)}`;
  }
}

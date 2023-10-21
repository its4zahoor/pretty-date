const { formatRelative } = require("date-fns");

export function fromNow(date) {
  return formatRelative(date, Date.now);
}

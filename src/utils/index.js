import { formatRelative } from 'date-fns'

export function fromNow(date) {
  return formatRelative(date, Date.now)
}

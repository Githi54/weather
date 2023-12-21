export const formatTimeToAmPmShort = (timeString: string): string => {
  let [hours] = timeString.split(':').map(Number)

  if (isNaN(hours)) {
    return 'Invalid time format'
  }

  let period = 'am'

  if (hours >= 12) {
    period = 'pm'

    if (hours > 12) {
      hours -= 12
    }
  }

  return `${hours}${period}`
}

import getYear from './getYear'
import getSeconds from './getSeconds'
import getMinutes from './getMinutes'
import getHours from './getHours'
import getMounth from './getMounth'

export const TimeParser = () => {
  let date = new Date()
  let dateArray = []
  let years = getYear(date)
  dateArray.push(years)
  let mounths = getMounth(date)
  dateArray.push(mounths)
  let hours = getHours(date)
  dateArray.push(hours)
  let minutes = getMinutes(date)
  dateArray.push(minutes)
  let seconds = getSeconds(date)
  dateArray.push(seconds)
  return dateArray
}

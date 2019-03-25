const getYear = date => {
  return {
    difference: date.getYear(),
    now: date.getFullYear(),
    name: 'Y',
    max: 0
  }
}
export default getYear

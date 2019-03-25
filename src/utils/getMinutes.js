const getMinutes = date => {
  return {
    difference: date.getMinutes(),
    now: date.getMinutes(),
    name: 'M'
  }
}
export default getMinutes

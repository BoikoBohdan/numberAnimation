const getHours = date => {
  return {
    difference: date.getHours(),
    now: date.getHours(),
    name: 'H'
  }
}
export default getHours

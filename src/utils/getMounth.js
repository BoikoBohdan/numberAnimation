const getMounth = date => {
  return {
    difference: date.getMonth() + 1,
    now: date.getMonth() + 1,
    name: 'M'
  }
}
export default getMounth

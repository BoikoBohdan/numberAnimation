const getSeconds = date => {
  return {
    difference: date.getSeconds(),
    now: date.getSeconds(),
    name: 'S'
  }
}
export default getSeconds

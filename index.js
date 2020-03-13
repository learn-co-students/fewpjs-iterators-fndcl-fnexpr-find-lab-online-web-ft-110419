

superbowlWin = (array) => {
  let result = array.find(array => array.result === "W")
  return result ? result.year : undefined
}

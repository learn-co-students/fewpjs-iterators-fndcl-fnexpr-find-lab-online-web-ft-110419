const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winner = array.find(findWin)
 return winner ? winner.year : undefined
}

function findWin(obj) {
  return obj.result === 'W'
}
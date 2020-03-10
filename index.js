const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winner = record.find( function(s) { 
    return s.result === "W" 
  })
  if (winner){
  return winner.year
  }
}

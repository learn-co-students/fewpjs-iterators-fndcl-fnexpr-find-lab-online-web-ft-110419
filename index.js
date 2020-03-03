const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(ary) {
  let winYear
  ary.find(win => {
    if (win.result == "W") {
      winYear = win.year
    }
  })
  return winYear
}
const testVar = {}

const superbowlWin = (win) => {
  let years = ""
  let winner = win.find(e => e.result === "W");
  !!winner ? years = winner.year : years = undefined;
  return years
}


function testFunc() {
  return "hi"
}

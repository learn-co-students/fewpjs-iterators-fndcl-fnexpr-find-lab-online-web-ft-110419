const testVar = {};

function testFunc() {
  return "hi";
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
];

function superbowlWin(arr = []) {
  let winingResult = arr.find(obj => obj.result == "W");
  if (winingResult) {
    return winingResult.year;
  }
}

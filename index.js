function superbowlWin(records) {
  let result = records.find(function(record) {
    return record.result === 'W';
  });
  return !!result ? result.year : undefined;
}

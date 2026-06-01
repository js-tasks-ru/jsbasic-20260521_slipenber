function checkSpam(str) {
  let strLCase = str.toLowerCase();
  if (strLCase.includes('1xBet'.toLowerCase()) || strLCase.includes('XXX'.toLowerCase())){
    return true;
  }
  return false;
}

console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
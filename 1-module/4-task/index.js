function checkSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf('1xBet'.toLowerCase()) != -1 || str.indexOf('XXX'.toLowerCase()) != -1) {
     return true;
  } else {
      return false;
  }
}

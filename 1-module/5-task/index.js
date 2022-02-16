function truncate(str, maxlenght) {
  if (str.length <= 20) {
      return `${str}`;
  } else { 
      return `${str.slice(0, maxlenght - 1) + '…'}`;

  }
}

function ucFirst(str) {
  if (str.lenght == 1) {
      return str[0].toUpperCase();
  };
  
  if (str.charAt(0) == '') {
      return '';
  } else {
      return str[0].toUpperCase() + str.slice(1);
  }
}

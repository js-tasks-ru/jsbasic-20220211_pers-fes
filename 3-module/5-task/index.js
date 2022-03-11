function getMinMax(str){
  let arr = str.split(' ').filter(key => isFinite(key) == true);

  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };

}

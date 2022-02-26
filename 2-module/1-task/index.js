function sumSalary(salaries) {
  let result = 0;
  for (let key of Object.values(salaries)) {
    if (typeof key == 'number' && isFinite(key) == true) {
          result += key;
    };
  };
  return +result;
};
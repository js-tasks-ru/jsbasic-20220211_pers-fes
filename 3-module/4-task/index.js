function showSalary(users, age) {
  let arr = users.filter(user => user.age <= age).map(user => `${user["name"]}, ${user["balance"]}`);
  return arr.join('\n');
  
}

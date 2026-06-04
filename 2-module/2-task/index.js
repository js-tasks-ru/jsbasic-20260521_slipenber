function isEmpty(obj) {
  for (let key in obj){
    return false;
  }
  return true;
}

let schedule = {4: true};
console.log(( isEmpty(schedule) )); // true
schedule["8:30"] = "подъём";
console.log(( isEmpty(schedule) )); // false
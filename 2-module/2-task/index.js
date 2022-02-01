function isEmpty(obj) {
  // ваш код...
  let count = 0;
  for (let k in obj) {
    count++;
  }
  if (count != 0) {
    return false;
  }
  return true;
}

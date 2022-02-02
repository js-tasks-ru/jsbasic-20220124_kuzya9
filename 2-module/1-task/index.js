function sumSalary(salaries) {
  // ваш код...
  let summ = 0;
  for (let k in salaries) {
    if (typeof salaries[k] === 'number' && isFinite(salaries[k]) !== false) {
      summ += salaries[k];
    } else {
      return summ;
    }
  }
  return summ;
}
function getMinMax(str) {
  // ваш код...
  let data = str.split(' ').filter(item => isFinite(item));
  let result = {
    min: Math.min(...data),
    max: Math.max(...data)
  };
  return result; 
}

function ucFirst(str) {
  // ваш код...
  const letter = str.charAt(0).toUpperCase();
  const newStr = letter + str.slice(1);
  return newStr;
}

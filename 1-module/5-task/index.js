function truncate(str, maxlength) {
  // ваш код...
  const max = maxlength;
  const lenStr = str.length;
  if (lenStr > max) {
    const part1 = str.substr(0, max - 1) + "…";
    return part1;
  } else {
    return str;
  }
}

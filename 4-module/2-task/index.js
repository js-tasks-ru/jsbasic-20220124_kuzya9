function makeDiagonalRed(table) {
  // ваш код...
  const countRows = table.rows.length;
  for (let i = 0; i < countRows; i++) {
    table.rows[i].cells[i].style.background = 'red';
  }
}

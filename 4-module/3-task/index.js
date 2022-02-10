function highlight(table) {
  // ваш код...
  const countRows = table.rows.length;
  for (let i = 1; i < countRows; i++) {
    let status = table.rows[i].cells[3].getAttribute('data-available');
    let gender = table.rows[i].cells[2].innerHTML;

    if (status == 'true') {
      table.rows[i].classList.toggle('available');
    } else if (status == 'false') {
      table.rows[i].classList.toggle('unavailable');
    } else {
      table.rows[i].setAttribute('hidden', true);
    }

    if (gender == 'm') {
      table.rows[i].classList.toggle('male');
    } else {
      table.rows[i].classList.toggle('female');
    }

    if (table.rows[i].cells[1].innerHTML < 18) {
      table.rows[i].style.textDecoration = "line-through";
    }
  }
}

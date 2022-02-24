/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = this.createTable(rows);
  }
   
  createTable(rows) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let trhead = document.createElement('tr');
    let tbody = document.createElement('tbody');
   
    thead.insertAdjacentHTML('beforeEnd', `<tr> 
   <th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th>
   </tr>`);
    
    
    for (const row of this.data) {
      let tr = document.createElement('TR');
    
      for (const key in row) {
        const val = row[key];
        let td = document.createElement('TD');
        td.append(val);
        tr.append(td);
      }
    
      tr.insertAdjacentHTML('beforeEnd', 
        `<td><button>X</button></td>`);
    
      table.appendChild(thead);
      tbody.appendChild(tr);
      table.appendChild(tbody);
    }
    
    const buttons = table.querySelectorAll("button");
    for (const button of buttons) {
      button.addEventListener('click', (event) =>
        event.target.closest("tr").remove());
    }
    
    return table;
  }
    
}


const table = document.getElementById('table');
const thead = document.getElementById('table-head');
const tbody = document.getElementById('bodyTable');
const addColumn = document.getElementById('add-column');
const addRow = document.getElementById('add-row');
const rows = document.querySelectorAll('.rowsGenerator');
const newColumn = [];
const newRow = ['1','2','3','4','5','6','7','8','9','10','11','12','13','15','16','17'];
let i = 0;
let e = 0;

function createRow() {
  i += 1;
  const trRow = document.createElement('tr');
  const tdRow = document.createElement('td');
  newRow.forEach(() => {
    const td = document.createElement('td');
    td.setAttribute('contenteditable', true);
    tdRow.innerHTML = newRow[e];
    trRow.appendChild(td);
    table.appendChild(trRow);
  });
}

function createColumn() {
  const th = document.createElement('th');
  thead.appendChild(th);
  rows.forEach((tds) => {
    const newTd = document.createElement('td');
    newTd.setAttribute('contenteditable', true);
    th.innerHTML = newColumn[i];
    tds.appendChild(newTd);
    table.appendChild(tds);
  });
  table.insertBefore(thead, table.children[0]);
  i += 1;
}

addColumn.addEventListener('click', createColumn);
addRow.addEventListener('click', createRow);

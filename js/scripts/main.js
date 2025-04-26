import { getAll } from './db.js';

const table = document.querySelector('table.table');

const generateTable = (data = []) => {
console.log(data);

const thead = document.createElement('thead');
table.appendChild(thead);

const keys = Object.keys(data[0]);
const tr = document.createElement('tr');
thead.appendChild(tr);
keys.forEach( key => {
    const th = document.createElement('th');
    tr.appendChild(th);
    th.innerText = key;
});
const th = document.createElement('th');
    tr.appendChild(th);

};

getAll().then(data => generateTable(data));

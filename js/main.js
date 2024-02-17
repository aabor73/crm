'use strict';

const modalTitle = document.querySelector('.modal-title');
const modalForm = document.querySelector('.modal-form');
const checkboxDiscount = document.querySelector('.modal-checkbox');
const inputDiscount = document.querySelector('.modal__input_discount');

const overlay = document.querySelector('.overlay');
overlay.classList.remove('active'); // Remove active class

const createRow = (object) => {
    const row = document.createElement('tr');    
    row.innerHTML = `
    <td class="table__cell">${object.num}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="${object.id}">
       <span class="table__cell-id">id: ${object.id}</span>${object.title}
    </td>
    <td class="table__cell table__cell_left">${object.category}</td>
    <td class="table__cell">${object.unit}</td>
    <td class="table__cell">${object.count}</td>
    <td class="table__cell">${object.price}</td>
    <td class="table__cell">${object.total}</td>
    <td class="table__cell table__cell_btn-wrapper">
       <button class="table__btn table__btn_pic"></button>
       <button class="table__btn table__btn_edit"></button>
       <button class="table__btn table__btn_del"></button>
    </td> `;
    
return row;
}

const renderGoods = (array) => {
    const table = document.querySelector('.table');
    array.forEach(item => {
    const row = createRow(item);
    table.appendChild(row);
});
}

// Пример массива объектов
const goods = [
{
num: 3,
id: 34601654816512,
title: 'Смартфон Xiaomi 11T 8/128GB',
category: 'Мобильные телефоны',
unit: 'шт',
count: 3,
price: 27000,
total: 81000
},
{
num: 4,
id: 14601854816512,
title: 'Радиоуправляемый автомобиль Cheetan',
category: 'Игрушки',
unit: 'шт',
count: 7,
price: 2500,
total: 17500
},
{
num: 5,
id: 44601654123512,
title: 'ТВ приставка MECOOL KI',
category: 'ТВ пристаки',
unit: 'шт',
count: 4,
price: 12400,
total: 49600
},
];

renderGoods(goods);

import faker from 'faker';

let cart = `<div>Items in cart loaded: ${faker.random.number()}</div>`;



document.querySelector('#dev-cart').innerHTML = cart;
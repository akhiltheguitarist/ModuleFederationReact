import { mount } from 'products/ProductsIndex';
import { mountCart } from 'cart/CartShow';

console.log('container!');
const el = document.querySelector('#container-product-list');
const el_cart = document.querySelector('#container-dev-cart');

el?  mount(el) : '';
el_cart ? mountCart(el_cart): '';
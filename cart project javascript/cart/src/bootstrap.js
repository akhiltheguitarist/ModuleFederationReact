import faker from 'faker';

const mountCart = (el) => {
    let cart = `<div>Items in cart loaded: ${faker.random.number()}</div>`;
    el.innerHTML = cart;
};

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');
    if(el) mountCart(el);
}

export { mountCart };

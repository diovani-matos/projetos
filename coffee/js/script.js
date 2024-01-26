AOS.init();

let iconCart = document.querySelector('.icon-cart');
let btnCartMobile = document.querySelector('.btn-cart-mobile');
let body = document.querySelector('body');


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

btnCartMobile.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

let closeCart = document.querySelector('.close-cart');

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        iconCart.style.position = 'fixed';
        iconCart.style.bottom = '10px';
        iconCart.style.right = '10px';

    } else {
        iconCart.style.position = 'relative';
        iconCart.style.bottom = 'auto';
        iconCart.style.right = 'auto';
    }
})


document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const addCartButtons = document.querySelectorAll('.add-cart');
    const cartList = document.querySelector('.list-cart');

    addCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const item = button.closest('.item');
        const itemName = item.querySelector('.title-price h3').textContent;
        const itemPrice = parseFloat(item.querySelector('.btn-price span').textContent.replace('$', ''));
        const itemImgSrc = item.querySelector('.img-item img').src;

        const existingItem = cart.find(cartItem => cartItem.name === itemName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                name: itemName,
                price: itemPrice,
                imgSrc: itemImgSrc,
                quantity: 1
            };
            cart.push(cartItem);
        }

        updateCartUI();
        saveCart();
    }

    function updateCartUI() {
        cartList.innerHTML = ''; // Clear current cart UI
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-cart');
            itemElement.innerHTML = `
                <div class="img-item-cart">
                    <img src="${item.imgSrc}" alt="produto">
                </div>
                <div class="name-item">${item.name}</div>
                <div class="total-price">${(item.price * item.quantity).toFixed(2)}</div>
                <div class="quantity">
                    <button class="minus" onclick="changeQuantity('minus', ${index})">-</button>
                    <span class="quantity-item">${item.quantity}</span>
                    <button class="plus" onclick="changeQuantity('plus', ${index})">+</button>
                    <button class="remove-item" onclick="removeItem(${index})">x</button>
                </div>
            `;
            cartList.appendChild(itemElement);
        });
    }

    window.changeQuantity = function (action, index) {
        const item = cart[index];
        if (action === 'minus' && item.quantity > 1) {
            item.quantity--;
        } else if (action === 'plus') {
            item.quantity++;
        }
        updateCartUI();
        saveCart();
    };

    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCartUI();
        saveCart();
    };

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // At the end, update the UI initially if there are items in the cart
    if (cart.length > 0) {
        updateCartUI();
    }
});
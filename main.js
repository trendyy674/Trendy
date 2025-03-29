// script.js

let cart = [];
let cartCount = document.getElementById("cart-count");
let totalPriceElement = document.getElementById("total-price");
let cartItems = document.getElementById("cart-items");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let productName = this.getAttribute("data-name");
        let productPrice = parseFloat(this.getAttribute("data-price"));
        addToCart(productName, productPrice);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
}

document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
    } else {
        alert("Your cart is empty.");
    }
});

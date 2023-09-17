const products = [
    {
        name: "cherry",
        price: 3,
        quantity: 0,
        productId: 1,
        image: "./images/cherry.jpg",
    },
    {
        name: "oranges",
        price: 4,
        quantity: 0,
        productId: 2,
        image: "./images/orange.jpg",
    },
    {
        name: "strawberry",
        price: 5,
        quantity: 0,
        productId: 3,
        image: "./images/strawberry.jpg",
    },
];

const cart = [];

function addProductToCart(productId) {
    const product = products.find((product) => product.productId === productId);
    if (!product) return;
    const productExist = cart.find((item) => item.productId === product.productId);
    if (!productExist) {
        cart.push(product);
    }
    product.quantity += 1;
}

function increaseQuantity(productId) {
    const product = cart.find((product) => product.productId === productId);
    if (!product) return;
    product.quantity += 1;
}

function decreaseQuantity(productId) {
    const product = cart.find((product) => product.productId === productId);
    if (!product) return;
    if (product.quantity === 1) {
        cart.pop(product);
    }
    product.quantity -= 1;
}

function removeProductFromCart(productId) {
    const product = cart.find((product) => product.productId === productId);
    if (!product) return;
    product.quantity = 0;
    return cart.pop(product);
}

function cartTotal() {
    return cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
}

function pay(amount) {
    return amount;
}

module.exports = {
    cart,
    products,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = exports.addToCart = void 0;
// Додавання товару в кошик
const addToCart = (cart, product, quantity) => {
    return [...cart, { product, quantity }];
};
exports.addToCart = addToCart;
// Підрахунок загальної вартості
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
exports.calculateTotal = calculateTotal;

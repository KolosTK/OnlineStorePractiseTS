"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productFunctions_1 = require("./productFunctions");
const cartFunctions_1 = require("./cartFunctions");
// Тестові дані для електроніки
const electronics = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warranty: '1 рік'
    },
    {
        id: 2,
        name: "Ноутбук",
        price: 25000,
        category: 'electronics',
        warranty: '2 роки'
    },
    {
        id: 3,
        name: "Телевізор",
        price: 15000,
        category: 'electronics',
        warranty: '1 рік'
    }
];
// Тестові дані для одягу
const clothing = [
    {
        id: 4,
        name: "Футболка",
        price: 500,
        category: 'clothing',
        size: 'M'
    },
    {
        id: 5,
        name: "Куртка",
        price: 3000,
        category: 'clothing',
        size: 'L'
    },
    {
        id: 6,
        name: "Джинси",
        price: 2000,
        category: 'clothing',
        size: 'XL'
    }
];
// Тестові дані для книг
const books = [
    {
        id: 7,
        name: "Великий Гетсбі",
        price: 200,
        category: 'book',
        author: 'Френсіс Скотт Фіцджеральд'
    },
    {
        id: 8,
        name: "1984",
        price: 150,
        category: 'book',
        author: 'Джордж Орвелл'
    },
    {
        id: 9,
        name: "Гаррі Поттер і філософський камінь",
        price: 300,
        category: 'book',
        author: 'Дж. К. Ролінг'
    }
];
// Тестування функцій
// Пошук товару
const foundProduct = (0, productFunctions_1.findProduct)(electronics, 2);
console.log("Знайдений товар:", foundProduct);
// Фільтрація товарів за ціною
const affordableElectronics = (0, productFunctions_1.filterByPrice)(electronics, 15000);
console.log("Електроніка до 15000:", affordableElectronics);
// Робота з кошиком
let cart = [];
cart = (0, cartFunctions_1.addToCart)(cart, electronics[0], 1);
cart = (0, cartFunctions_1.addToCart)(cart, clothing[1], 2);
cart = (0, cartFunctions_1.addToCart)(cart, books[2], 1);
console.log("Кошик:", cart);
console.log("Загальна вартість кошика:", (0, cartFunctions_1.calculateTotal)(cart));

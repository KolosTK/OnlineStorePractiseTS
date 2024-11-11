import { Electronics, Clothing, Books } from './types';
import { findProduct, filterByPrice } from './productFunctions';
import { addToCart, calculateTotal, CartItem } from './cartFunctions';

const electronics: Electronics[] = [
  {
    id: 3,
    name: "Television",
    price: 18000,
    category: 'electronics',
    warranty: '2 years'
  },
  {
    id: 4,
    name: "Tablet",
    price: 8000,
    category: 'electronics',
    warranty: '1 year'
  },
  {
    id: 5,
    name: "Headphones",
    price: 2000,
    category: 'electronics',
    warranty: '6 months'
  }
];

const clothing: Clothing[] = [
  {
    id: 1,
    name: "Hoodie",
    price: 2500,
    category: 'clothing',
    size: 'M'
  },
  {
    id: 2,
    name: "Sweater",
    price: 1500,
    category: 'clothing',
    size: 'S'
  },
  {
    id: 3,
    name: "Trousers",
    price: 1800,
    category: 'clothing',
    size: 'L'
  },
  {
    id: 4,
    name: "Blazer",
    price: 4000,
    category: 'clothing',
    size: 'XL'
  }
];
const books: Books[] = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    price: 180,
    category: 'book',
    author: 'Harper Lee'
  },
  {
    id: 2,
    name: "Pride and Prejudice",
    price: 200,
    category: 'book',
    author: 'Jane Austen'
  },
  {
    id: 3,
    name: "The Hobbit",
    price: 250,
    category: 'book',
    author: 'J.R.R. Tolkien'
  },
  {
    id: 4,
    name: "Moby Dick",
    price: 220,
    category: 'book',
    author: 'Herman Melville'
  }
];

const foundProduct = findProduct(electronics, 2);
console.log("Знайдений товар:", foundProduct);

const affordableElectronics = filterByPrice(electronics, 15000);
console.log("Електроніка до 15000:", affordableElectronics);

let cart: CartItem<Electronics | Clothing | Books >[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[1], 2);

console.log("Кошик:", cart);
console.log("Загальна вартість кошика:", calculateTotal(cart));

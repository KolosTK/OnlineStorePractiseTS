import { BaseProduct } from './types';



// Тип для елемента кошика
export type CartItem<T> = {
  product: T;
  quantity: number;
};

// Додавання товару в кошик
export const addToCart = <T extends BaseProduct>(
  cart: CartItem<T>[],
  product: T,
  quantity: number
): CartItem<T>[] => {
  return [...cart, { product, quantity }];
};

// Підрахунок загальної вартості
export const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

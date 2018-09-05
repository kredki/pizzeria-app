import { Dish } from './dish';

export const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Pizza Margherita',
    isAvailable: true,
    description: 'Sos, ser',
    type: 'pizza',
    price: 22
  },
  {
    id: 2,
    name: 'Pizza Funghi',
    isAvailable: true,
    description: 'Sos, ser, pieczarki',
    type: 'pizza',
    price: 23.50
  },
  {
    id: 3,
    name: 'Herbata',
    isAvailable: true,
    description: 'Czarna herbata',
    type: 'drink',
    price: 13.90
  },
  {
    id: 4,
    name: 'Spagetti Bolognese',
    isAvailable: false,
    description: 'Sos boloński',
    type: 'spagetti',
    price: 14
  },
  {
    id: 5,
    name: 'Spagetti Siciliana',
    isAvailable: true,
    description: 'Sos boloński z szynką i kukurydzą',
    type: 'spagetti',
    price: 17.50
  }
];
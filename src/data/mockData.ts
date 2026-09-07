export interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice?: number;
  image: string;
  categoryId: string;
  discount?: string;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Vegetables & Fruits', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200' },
  { id: '2', name: 'Dairy & Breakfast', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=200' },
  { id: '3', name: 'Snacks & Munchies', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=200' },
  { id: '4', name: 'Cold Drinks & Juices', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200' },
  { id: '5', name: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200' },
  { id: '6', name: 'Sweet Tooth', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200' }
];

export const PRODUCTS: Product[] = (() => {
  const products: Product[] = [];
  let idCounter = 1;

  // 1: Vegetables & Fruits
  const vegImages = [
    'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1512621820151-d110e660d8aa?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300'
  ];
  const vegNames = ['Tomato', 'Potato', 'Onion', 'Carrot', 'Cabbage', 'Cauliflower', 'Broccoli', 'Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Watermelon', 'Papaya', 'Guava', 'Pomegranate', 'Kiwi', 'Strawberry'];

  vegNames.forEach((name, i) => {
    const isDiscount = i % 3 === 0;
    products.push({
      id: `p${idCounter++}`,
      name: `Fresh ${name}`,
      weight: i % 2 === 0 ? '1 kg' : '500 g',
      price: 40 + (i * 5),
      originalPrice: isDiscount ? 40 + (i * 5) + 20 : undefined,
      image: vegImages[i % vegImages.length],
      categoryId: '1',
      discount: isDiscount ? '20% OFF' : undefined,
      isBestseller: i % 4 === 0
    });
  });

  // 2: Dairy & Breakfast
  const dairyImages = [
    'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=300'
  ];
  const dairyNames = ['Toned Milk', 'Full Cream Milk', 'Brown Bread', 'White Bread', 'Salted Butter', 'Unsalted Butter', 'Cheese Slices', 'Cheese Block', 'Farm Eggs (6 pcs)', 'Paneer', 'Curd (Dahi)', 'Yogurt', 'Oats', 'Corn Flakes', 'Muesli', 'Honey', 'Peanut Butter'];

  dairyNames.forEach((name, i) => {
    products.push({
      id: `p${idCounter++}`,
      name: `Premium ${name}`,
      weight: '1 unit',
      price: 30 + (i * 8),
      image: dairyImages[i % dairyImages.length],
      categoryId: '2',
      isBestseller: i % 5 === 0
    });
  });

  // 3: Snacks & Munchies
  const snacksImages = [
    'https://images.unsplash.com/photo-1566478989037-e50b86a88b50?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=300'
  ];
  const snackNames = ['Potato Chips', 'Nachos', 'Bhujia', 'Mixture', 'Roasted Almonds', 'Cashews', 'Pistachios', 'Popcorn', 'Puffs', 'Tortilla Chips', 'Peanuts', 'Diet Mix', 'Kurkure', 'Khakhra', 'Mathri', 'Murukku'];

  snackNames.forEach((name, i) => {
    products.push({
      id: `p${idCounter++}`,
      name: `${name} Party Pack`,
      weight: '200 g',
      price: 50 + (i * 12),
      image: snacksImages[i % snacksImages.length],
      categoryId: '3',
      discount: i % 4 === 0 ? '10% OFF' : undefined
    });
  });

  // 4: Cold Drinks & Juices
  const drinksImages = [
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1613426027471-11cced4fb096?auto=format&fit=crop&q=80&w=300'
  ];
  const drinksNames = ['Cola', 'Orange Fizz', 'Lemon Soda', 'Energy Drink', 'Mango Juice', 'Apple Juice', 'Mixed Fruit Juice', 'Coconut Water', 'Iced Tea', 'Cold Coffee', 'Tonic Water', 'Ginger Ale', 'Sparkling Water', 'Mineral Water', 'Club Soda'];

  drinksNames.forEach((name, i) => {
    products.push({
      id: `p${idCounter++}`,
      name: `${name} Refreshing`,
      weight: '750 ml',
      price: 45 + (i * 5),
      image: drinksImages[i % drinksImages.length],
      categoryId: '4',
      isBestseller: i % 7 === 0
    });
  });

  // 5: Bakery & Biscuits
  const bakeryImages = [
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300'
  ];
  const bakeryNames = ['Digestive Biscuits', 'Chocolate Chip Cookies', 'Marie Biscuits', 'Cream Biscuits', 'Oat Cookies', 'Rusks', 'Croissant', 'Muffins', 'Cupcakes', 'Brownie', 'Plum Cake', 'Fruit Cake', 'Khari', 'Veg Puff', 'Pound Cake'];

  bakeryNames.forEach((name, i) => {
    products.push({
      id: `p${idCounter++}`,
      name: `Signature ${name}`,
      weight: '250 g',
      price: 60 + (i * 10),
      image: bakeryImages[i % bakeryImages.length],
      categoryId: '5'
    });
  });

  // 6: Sweet Tooth
  const sweetsImages = [
    'https://images.unsplash.com/photo-1582293041079-7815cf1ce421?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80&w=300'
  ];
  const sweetsNames = ['Hazelnut Spread', 'Milk Chocolate Bar', 'Dark Chocolate Bar', 'White Chocolate', 'Caramel Candies', 'Gummy Bears', 'Jelly Beans', 'Marshmallows', 'Lollipops', 'Rasgulla', 'Gulab Jamun', 'Soan Papdi', 'Kaju Katli', 'Ladoo', 'Barfi'];

  sweetsNames.forEach((name, i) => {
    products.push({
      id: `p${idCounter++}`,
      name: `${name} Delight`,
      weight: '500 g',
      price: 150 + (i * 20),
      image: sweetsImages[i % sweetsImages.length],
      categoryId: '6',
      isBestseller: i % 3 === 0
    });
  });

  // Inject specific variants for testing PDP suggestions
  products.push(
    { id: 'p990', name: 'Organic Banana', weight: '6 pcs', price: 65, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300', categoryId: '1' },
    { id: 'p991', name: 'Raw Banana', weight: '500 g', price: 25, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300', categoryId: '1' },
    { id: 'p992', name: 'Cherry Tomato', weight: '200 g', price: 45, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300', categoryId: '1' }
  );

  return products;
})();

export const BANNERS = [
  { id: 'b1', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200' },
  { id: 'b2', image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=1200' },
  { id: 'b3', image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1200' }
];

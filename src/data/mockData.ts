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
  { id: '3', name: 'Snacks & Munchies', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=200' },
  { id: '4', name: 'Cold Drinks & Juices', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200' },
  { id: '5', name: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200' }
];

export const PRODUCTS: Product[] = [
  { id: '101', name: 'Potato', weight: '1 kg', price: 40, originalPrice: 50, categoryId: '1', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400', isBestseller: true, discount: '20%' },
  { id: '102', name: 'Onion', weight: '1 kg', price: 50, originalPrice: 60, categoryId: '1', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400', isBestseller: true, discount: '16%' },
  { id: '103', name: 'Tomato', weight: '1 kg', price: 60, originalPrice: 70, categoryId: '1', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400', isBestseller: true, discount: '14%' },
  { id: '104', name: 'Garlic', weight: '250 g', price: 80, originalPrice: 100, categoryId: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
  { id: '105', name: 'Ginger', weight: '250 g', price: 60, originalPrice: 80, categoryId: '1', image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=400' },
  { id: '106', name: 'Green Chilli', weight: '200 g', price: 20, originalPrice: 30, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Madame_Jeanette_and_other_chillies.jpg/500px-Madame_Jeanette_and_other_chillies.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '107', name: 'Carrot', weight: '1 kg', price: 45, originalPrice: 55, categoryId: '1', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400' },
  { id: '108', name: 'Radish', weight: '500 g', price: 30, originalPrice: 40, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/500px-Radish_3371103037_4ab07db0bf_o.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '109', name: 'Beetroot', weight: '500 g', price: 35, originalPrice: 45, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Detroitdarkredbeets.png/500px-Detroitdarkredbeets.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '110', name: 'Cucumber', weight: '500 g', price: 25, originalPrice: 35, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '111', name: 'Capsicum', weight: '500 g', price: 50, originalPrice: 65, categoryId: '1', image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=400' },
  { id: '112', name: 'Green Peas', weight: '500 g', price: 55, originalPrice: 70, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '113', name: 'Cabbage', weight: '1 piece', price: 40, originalPrice: 50, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '114', name: 'Cauliflower', weight: '1 piece', price: 45, originalPrice: 60, categoryId: '1', image: 'https://images.unsplash.com/photo-1568581789190-ae90a7da930b?auto=format&fit=crop&q=80&w=400' },
  { id: '115', name: 'Broccoli', weight: '1 piece', price: 80, originalPrice: 100, categoryId: '1', image: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&q=80&w=400' },
  { id: '116', name: 'Spinach', weight: '250 g', price: 20, originalPrice: 30, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '117', name: 'Coriander', weight: '100 g', price: 15, originalPrice: 20, categoryId: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
  { id: '118', name: 'Mint', weight: '100 g', price: 10, originalPrice: 15, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/500px-Pfefferminze_natur_peppermint.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '119', name: 'Lady Finger', weight: '500 g', price: 40, originalPrice: 55, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/500px-Hong_Kong_Okra_Aug_25_2012.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '120', name: 'Brinjal', weight: '500 g', price: 35, originalPrice: 45, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/500px-Solanum_melongena_24_08_2012_%281%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '121', name: 'Bottle Gourd', weight: '1 piece', price: 30, originalPrice: 40, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Courge_encore_verte.jpg/500px-Courge_encore_verte.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '122', name: 'Bitter Gourd', weight: '500 g', price: 45, originalPrice: 60, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Momordica_charantia_Blanco2.357.png/500px-Momordica_charantia_Blanco2.357.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '123', name: 'Pumpkin', weight: '1 piece', price: 50, originalPrice: 70, categoryId: '1', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&q=80&w=400' },
  { id: '124', name: 'Lemon', weight: '5 pieces', price: 25, originalPrice: 35, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '125', name: 'Sweet Corn', weight: '2 pieces', price: 40, originalPrice: 50, categoryId: '1', image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&q=80&w=400' },
  { id: '126', name: 'Ridge Gourd', weight: '500 g', price: 40, originalPrice: 50, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Momordica_charantia_Blanco2.357.png/500px-Momordica_charantia_Blanco2.357.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '127', name: 'Apple', weight: '1 kg', price: 150, originalPrice: 180, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', isBestseller: true, discount: '16%' },
  { id: '128', name: 'Banana', weight: '1 dozen', price: 60, originalPrice: 80, categoryId: '1', image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=400', isBestseller: true, discount: '25%' },
  { id: '129', name: 'Mango', weight: '1 kg', price: 120, originalPrice: 150, categoryId: '1', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400' },
  { id: '130', name: 'Orange', weight: '1 kg', price: 100, originalPrice: 130, categoryId: '1', image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?auto=format&fit=crop&q=80&w=400' },
  { id: '131', name: 'Grapes', weight: '500 g', price: 90, originalPrice: 110, categoryId: '1', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&q=80&w=400' },
  { id: '132', name: 'Pomegranate', weight: '4 pieces', price: 180, originalPrice: 220, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/500px-Pomegranate_Juice_%282019%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '133', name: 'Watermelon', weight: '1 piece', price: 90, originalPrice: 120, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', isBestseller: true, discount: '25%' },
  { id: '134', name: 'Muskmelon', weight: '1 piece', price: 60, originalPrice: 80, categoryId: '1', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' },
  { id: '135', name: 'Papaya', weight: '1 piece', price: 70, originalPrice: 90, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg/500px-Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '136', name: 'Guava', weight: '1 kg', price: 80, originalPrice: 100, categoryId: '1', image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&q=80&w=400' },
  { id: '137', name: 'Pineapple', weight: '1 piece', price: 100, originalPrice: 130, categoryId: '1', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '138', name: 'Kiwi', weight: '3 pieces', price: 150, originalPrice: 180, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '139', name: 'Strawberry', weight: '250 g', price: 120, originalPrice: 150, categoryId: '1', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400' },
  { id: '140', name: 'Pear', weight: '500 g', price: 90, originalPrice: 110, categoryId: '1', image: 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&q=80&w=400' },
  { id: '141', name: 'Peach', weight: '500 g', price: 110, originalPrice: 140, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '142', name: 'Plum', weight: '500 g', price: 130, originalPrice: 160, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '143', name: 'Chikoo', weight: '500 g', price: 60, originalPrice: 80, categoryId: '1', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' },
  { id: '144', name: 'Dragon Fruit', weight: '1 piece', price: 120, originalPrice: 150, categoryId: '1', image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&q=80&w=400' },
  { id: '145', name: 'Coconut', weight: '1 piece', price: 50, originalPrice: 65, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg/500px-Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '146', name: 'Avocado', weight: '1 piece', price: 200, originalPrice: 250, categoryId: '1', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400' },
  { id: '147', name: 'Custard Apple', weight: '1 kg', price: 180, originalPrice: 220, categoryId: '1', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' },
  { id: '148', name: 'Litchi', weight: '500 g', price: 150, originalPrice: 180, categoryId: '1', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Litchi_chinensis_fruits.JPG/500px-Litchi_chinensis_fruits.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
  { id: '149', name: 'Blueberry', weight: '125 g', price: 250, originalPrice: 300, categoryId: '1', image: 'https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?auto=format&fit=crop&q=80&w=400' },
  { id: '150', name: 'Mosambi', weight: '1 kg', price: 80, originalPrice: 100, categoryId: '1', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' }
  ,
  { "id": "301", "name": "Milk", "weight": "1 unit", "price": 51, "originalPrice": 161, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "302", "name": "Butter", "weight": "1 unit", "price": 45, "originalPrice": 193, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "303", "name": "Cheese", "weight": "1 unit", "price": 50, "originalPrice": 199, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "304", "name": "Yogurt", "weight": "1 unit", "price": 25, "originalPrice": 135, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "305", "name": "Cream", "weight": "1 unit", "price": 47, "originalPrice": 176, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "306", "name": "Paneer", "weight": "1 unit", "price": 21, "originalPrice": 126, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Panir_Paneer_Indian_cheese_fresh.jpg/500px-Panir_Paneer_Indian_cheese_fresh.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "307", "name": "Ghee", "weight": "1 unit", "price": 53, "originalPrice": 190, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "308", "name": "Oats", "weight": "1 unit", "price": 73, "originalPrice": 178, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Rolled_oats.jpg/500px-Rolled_oats.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "309", "name": "Corn Flakes", "weight": "1 unit", "price": 37, "originalPrice": 162, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Kellogg%27s_Corn_Flakes%2C_with_milk.jpg/500px-Kellogg%27s_Corn_Flakes%2C_with_milk.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "310", "name": "Honey", "weight": "1 unit", "price": 25, "originalPrice": 170, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "311", "name": "Peanut Butter", "weight": "1 unit", "price": 35, "originalPrice": 190, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "312", "name": "Muesli", "weight": "1 unit", "price": 54, "originalPrice": 138, "categoryId": "2", "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Dorset_Cereals_muesli.jpg/500px-Dorset_Cereals_muesli.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
  { "id": "326", "name": "Coca-Cola", "weight": "1 unit", "price": 72, "originalPrice": 126, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "327", "name": "Pepsi", "weight": "1 unit", "price": 88, "originalPrice": 187, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "328", "name": "Sprite", "weight": "1 unit", "price": 28, "originalPrice": 187, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "329", "name": "Fanta", "weight": "1 unit", "price": 34, "originalPrice": 198, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "330", "name": "Orange Juice", "weight": "1 unit", "price": 36, "originalPrice": 143, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "331", "name": "Apple Juice", "weight": "1 unit", "price": 97, "originalPrice": 156, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "332", "name": "Mango Juice", "weight": "1 unit", "price": 29, "originalPrice": 190, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "333", "name": "Lemonade", "weight": "1 unit", "price": 25, "originalPrice": 153, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "334", "name": "Iced Tea", "weight": "1 unit", "price": 41, "originalPrice": 120, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "335", "name": "Cold Coffee", "weight": "1 unit", "price": 52, "originalPrice": 125, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "336", "name": "Milkshake", "weight": "1 unit", "price": 51, "originalPrice": 181, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "337", "name": "Soda Water", "weight": "1 unit", "price": 64, "originalPrice": 129, "categoryId": "4", "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { "id": "338", "name": "White Bread", "weight": "1 unit", "price": 42, "originalPrice": 140, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "339", "name": "Croissant", "weight": "1 unit", "price": 37, "originalPrice": 186, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "340", "name": "Chocolate Chip Cookie", "weight": "1 unit", "price": 41, "originalPrice": 139, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "341", "name": "Macaron", "weight": "1 unit", "price": 58, "originalPrice": 138, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "342", "name": "Brownie", "weight": "1 unit", "price": 97, "originalPrice": 144, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "343", "name": "Cupcake", "weight": "1 unit", "price": 72, "originalPrice": 130, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "344", "name": "Doughnut", "weight": "1 unit", "price": 59, "originalPrice": 198, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "345", "name": "Bagel", "weight": "1 unit", "price": 39, "originalPrice": 173, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "346", "name": "Cake", "weight": "1 unit", "price": 42, "originalPrice": 156, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "347", "name": "Pastry", "weight": "1 unit", "price": 54, "originalPrice": 199, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "348", "name": "Tart", "weight": "1 unit", "price": 20, "originalPrice": 175, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "349", "name": "Fruit Pie", "weight": "1 unit", "price": 72, "originalPrice": 186, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
  { "id": "350", "name": "Rusk", "weight": "1 unit", "price": 31, "originalPrice": 178, "categoryId": "5", "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" }];



// Added 50 additional items
export const MORE_PRODUCTS = [
  {
    "id": "301",
    "name": "Milk",
    "weight": "1 unit",
    "price": 51,
    "originalPrice": 161,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "302",
    "name": "Butter",
    "weight": "1 unit",
    "price": 45,
    "originalPrice": 193,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "303",
    "name": "Cheese",
    "weight": "1 unit",
    "price": 50,
    "originalPrice": 199,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "304",
    "name": "Yogurt",
    "weight": "1 unit",
    "price": 25,
    "originalPrice": 135,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "305",
    "name": "Cream",
    "weight": "1 unit",
    "price": 47,
    "originalPrice": 176,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "306",
    "name": "Paneer",
    "weight": "1 unit",
    "price": 21,
    "originalPrice": 126,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Panir_Paneer_Indian_cheese_fresh.jpg/500px-Panir_Paneer_Indian_cheese_fresh.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "307",
    "name": "Ghee",
    "weight": "1 unit",
    "price": 53,
    "originalPrice": 190,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "308",
    "name": "Oats",
    "weight": "1 unit",
    "price": 73,
    "originalPrice": 178,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Rolled_oats.jpg/500px-Rolled_oats.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "309",
    "name": "Corn Flakes",
    "weight": "1 unit",
    "price": 37,
    "originalPrice": 162,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Kellogg%27s_Corn_Flakes%2C_with_milk.jpg/500px-Kellogg%27s_Corn_Flakes%2C_with_milk.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "310",
    "name": "Honey",
    "weight": "1 unit",
    "price": 25,
    "originalPrice": 170,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "311",
    "name": "Peanut Butter",
    "weight": "1 unit",
    "price": 35,
    "originalPrice": 190,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "312",
    "name": "Muesli",
    "weight": "1 unit",
    "price": 54,
    "originalPrice": 138,
    "categoryId": "2",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Dorset_Cereals_muesli.jpg/500px-Dorset_Cereals_muesli.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "326",
    "name": "Coca-Cola",
    "weight": "1 unit",
    "price": 72,
    "originalPrice": 126,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "327",
    "name": "Pepsi",
    "weight": "1 unit",
    "price": 88,
    "originalPrice": 187,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "328",
    "name": "Sprite",
    "weight": "1 unit",
    "price": 28,
    "originalPrice": 187,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "329",
    "name": "Fanta",
    "weight": "1 unit",
    "price": 34,
    "originalPrice": 198,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "330",
    "name": "Orange Juice",
    "weight": "1 unit",
    "price": 36,
    "originalPrice": 143,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "331",
    "name": "Apple Juice",
    "weight": "1 unit",
    "price": 97,
    "originalPrice": 156,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "332",
    "name": "Mango Juice",
    "weight": "1 unit",
    "price": 29,
    "originalPrice": 190,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "333",
    "name": "Lemonade",
    "weight": "1 unit",
    "price": 25,
    "originalPrice": 153,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "334",
    "name": "Iced Tea",
    "weight": "1 unit",
    "price": 41,
    "originalPrice": 120,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "335",
    "name": "Cold Coffee",
    "weight": "1 unit",
    "price": 52,
    "originalPrice": 125,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "336",
    "name": "Milkshake",
    "weight": "1 unit",
    "price": 51,
    "originalPrice": 181,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "337",
    "name": "Soda Water",
    "weight": "1 unit",
    "price": 64,
    "originalPrice": 129,
    "categoryId": "4",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "338",
    "name": "White Bread",
    "weight": "1 unit",
    "price": 42,
    "originalPrice": 140,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "339",
    "name": "Croissant",
    "weight": "1 unit",
    "price": 37,
    "originalPrice": 186,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "340",
    "name": "Chocolate Chip Cookie",
    "weight": "1 unit",
    "price": 41,
    "originalPrice": 139,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "341",
    "name": "Macaron",
    "weight": "1 unit",
    "price": 58,
    "originalPrice": 138,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "342",
    "name": "Brownie",
    "weight": "1 unit",
    "price": 97,
    "originalPrice": 144,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "343",
    "name": "Cupcake",
    "weight": "1 unit",
    "price": 72,
    "originalPrice": 130,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "344",
    "name": "Doughnut",
    "weight": "1 unit",
    "price": 59,
    "originalPrice": 198,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "345",
    "name": "Bagel",
    "weight": "1 unit",
    "price": 39,
    "originalPrice": 173,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "346",
    "name": "Cake",
    "weight": "1 unit",
    "price": 42,
    "originalPrice": 156,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "347",
    "name": "Pastry",
    "weight": "1 unit",
    "price": 54,
    "originalPrice": 199,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "348",
    "name": "Tart",
    "weight": "1 unit",
    "price": 20,
    "originalPrice": 175,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "349",
    "name": "Fruit Pie",
    "weight": "1 unit",
    "price": 72,
    "originalPrice": 186,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "350",
    "name": "Rusk",
    "weight": "1 unit",
    "price": 31,
    "originalPrice": 178,
    "categoryId": "5",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  }
];

export const BANNERS = [
  { id: 'b1', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200' },
  { id: 'b2', image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=1200' },
  { id: 'b3', image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1200' }
];

export const SNACKS_50: Product[] = [
  { id: '400', name: 'Lays Classic', weight: '1 packet', price: 25, originalPrice: 35, categoryId: '3', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '401', name: 'Kurkure Masala Munch', weight: '1 packet', price: 20, originalPrice: 30, categoryId: '3', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '402', name: 'Bingo Mad Angles', weight: '1 packet', price: 25, originalPrice: 40, categoryId: '3', image: 'https://images.unsplash.com/photo-1566478989037-ebee17046f20?auto=format&fit=crop&q=80&w=400' },
  { id: '403', name: 'Doritos Nacho Cheese', weight: '1 packet', price: 50, originalPrice: 65, categoryId: '3', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '404', name: 'Haldiram Bhujia', weight: '500 g', price: 120, originalPrice: 150, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '405', name: 'Moong Dal', weight: '250 g', price: 60, originalPrice: 80, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '406', name: 'Aloo Bhujia', weight: '500 g', price: 110, originalPrice: 130, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '407', name: 'Roasted Peanuts', weight: '250 g', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '408', name: 'Makhana', weight: '100 g', price: 150, originalPrice: 180, categoryId: '3', image: 'https://images.unsplash.com/photo-1582283086196-ad73e659b8eb?auto=format&fit=crop&q=80&w=400' },
  { id: '409', name: 'Cheese Popcorn', weight: '1 unit', price: 50, originalPrice: 80, categoryId: '3', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400' },
  { id: '410', name: 'Butter Popcorn', weight: '1 unit', price: 40, originalPrice: 60, categoryId: '3', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400' },
  { id: '411', name: 'Caramel Popcorn', weight: '1 unit', price: 70, originalPrice: 90, categoryId: '3', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400' },
  { id: '412', name: 'Punjabi Samosa', weight: '2 units', price: 40, originalPrice: 55, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '413', name: 'Kachori', weight: '2 units', price: 50, originalPrice: 70, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '414', name: 'Mathri', weight: '250 g', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '415', name: 'Dhokla', weight: '500 g', price: 120, originalPrice: 150, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '416', name: 'Fafda', weight: '250 g', price: 100, originalPrice: 130, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '417', name: 'Jalebi', weight: '250 g', price: 90, originalPrice: 110, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '418', name: 'Bombay Mix', weight: '500 g', price: 130, originalPrice: 160, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '419', name: 'Sev', weight: '250 g', price: 60, originalPrice: 80, categoryId: '3', image: 'https://images.unsplash.com/photo-1658428805973-2cd22e5a4dbe?auto=format&fit=crop&q=80&w=400' },
  { id: '420', name: 'Salted Peanuts', weight: '250 g', price: 90, originalPrice: 120, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '421', name: 'Almonds', weight: '250 g', price: 300, originalPrice: 350, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '422', name: 'Cashews', weight: '250 g', price: 350, originalPrice: 400, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '423', name: 'Walnuts', weight: '250 g', price: 400, originalPrice: 450, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '424', name: 'Pistachios', weight: '250 g', price: 450, originalPrice: 500, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '425', name: 'Macadamia Nuts', weight: '100 g', price: 500, originalPrice: 550, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '426', name: 'Pecans', weight: '250 g', price: 450, originalPrice: 550, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '427', name: 'Hazelnuts', weight: '250 g', price: 380, originalPrice: 420, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '428', name: 'Brazil Nuts', weight: '250 g', price: 420, originalPrice: 500, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '429', name: 'Pine Nuts', weight: '100 g', price: 600, originalPrice: 700, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '430', name: 'Pumpkin Seeds', weight: '250 g', price: 150, originalPrice: 180, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '431', name: 'Sunflower Seeds', weight: '250 g', price: 100, originalPrice: 130, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '432', name: 'Lotus Seeds', weight: '100 g', price: 150, originalPrice: 200, categoryId: '3', image: 'https://images.unsplash.com/photo-1572916298517-d5d8fb867b34?auto=format&fit=crop&q=80&w=400' },
  { id: '433', name: 'Marie Biscuit', weight: '1 packet', price: 30, originalPrice: 40, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '434', name: 'Chocolate Chip Cookie', weight: '1 box', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '435', name: 'Crackers', weight: '1 packet', price: 40, originalPrice: 50, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '436', name: 'Graham Crackers', weight: '1 box', price: 90, originalPrice: 110, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '437', name: 'Saltine Crackers', weight: '1 packet', price: 50, originalPrice: 65, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '438', name: 'Rice Crackers', weight: '1 packet', price: 120, originalPrice: 150, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '439', name: 'Rice Cakes', weight: '1 packet', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '440', name: 'Granola Bar', weight: '1 unit', price: 40, originalPrice: 50, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '441', name: 'Protein Bar', weight: '1 unit', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '442', name: 'Fruit Snacks', weight: '1 packet', price: 40, originalPrice: 60, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '443', name: 'Beef Jerky', weight: '100 g', price: 200, originalPrice: 250, categoryId: '3', image: 'https://images.unsplash.com/photo-1582283086196-ad73e659b8eb?auto=format&fit=crop&q=80&w=400' },
  { id: '444', name: 'Gummy Bears', weight: '1 packet', price: 50, originalPrice: 70, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '445', name: 'Jelly Beans', weight: '1 packet', price: 60, originalPrice: 80, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '446', name: 'Chocolate Bar', weight: '1 unit', price: 80, originalPrice: 100, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400', isBestseller: true },
  { id: '447', name: 'Marshmallows', weight: '1 packet', price: 90, originalPrice: 120, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '448', name: 'Cotton Candy', weight: '1 unit', price: 50, originalPrice: 70, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: '449', name: 'Chewing Gum', weight: '1 packet', price: 20, originalPrice: 30, categoryId: '3', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' }
];


import {create_iten} from "./services/item.js"; 
import {add_iten, calculate_total, delete_iten, remove_item, display_cart} from "./services/cart.js"; 

const my_cart = [];

console.log(`Welcome to the your Shoppee Cart!🫱`);

// Criei 2 itens
const item_1 = await create_iten("auricular", 2000 ,5); 
const item_2 = await  create_iten("lapiseira ", 100 , 4);

 console.log(item_1.sub_total());
 console.log(item_2.sub_total());

 // Adicionei 2 itens no carrinho
 add_iten(my_cart, item_1);
 add_iten(my_cart, item_2);

 // eliminar cada um item 
 remove_item(my_cart, item_1);
 remove_item(my_cart, item_1);
 remove_item(my_cart, item_2);
 remove_item(my_cart, item_2);

 display_cart(my_cart);

//  // Deletei 2 itens no carrinho
//  await delete_iten(my_cart, item_1.name);
//  await delete_iten(my_cart, item_2.name);

 calculate_total(my_cart);




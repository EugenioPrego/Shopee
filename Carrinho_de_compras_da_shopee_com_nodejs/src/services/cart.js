
//  quais sõa as ações que o carrinho(cart) fará?


// Casos de Uso
// adicionar item no carrinho
export const add_iten = async (user_cart, item) => {
    user_cart.push(item);
}
// calcular o total do carrinho
export const calculate_total = async (user_cart) => { 
    console.log(" \n Shoppee Cart Total is:");
    const result = user_cart.reduce((total, item) => total + item.sub_total(), 0);
    console.log(` Total: ${result}`);
}
// deletar item no carrinho
export const delete_iten = async (user_cart, name) => {
   const index = user_cart.findIndex((item) => item.name === name); 

   if(index != -1){
    user_cart.splice(index, 1);
   }
   console.log(index);
}
// remover um item - só diminui um item.
export const remove_item = async (user_cart, item) => {
    // Encontrar o indice do item
    const index_found = user_cart.findIndex((p) => p.name === item.name);
    
    // Caso não encontrar uma ação
    if(index_found == -1){
    console.log(`Item não encontrado`);
    return;
    }

    if(user_cart[index_found].quantity > 1){
        user_cart[index_found].quantity -= 1;
        return;
        
    } else if(user_cart[index_found].quantity === 1){
        user_cart.splice(index_found, 1);
    }
} 

// // remover um item - só diminui um item.
// export const remove_item = async (user_cart, index) => {
//     //  Transforma o index visual do usuário para o index do back-ende
//     //  const delete_index = index - 1;

//     if(index => 0 && index < user_cart.length){
//         user_cart.splice(index, 1);
//         // console.log(``)
//     }
// } 

export const display_cart = async (user_cart) => {
    console.log("\n Shopee Cart List:");
    user_cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - KZs ${item.price} | ${item.quantity} | Sub-Total = ${item.sub_total()}`);
    });
} 




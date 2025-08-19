
//  quais sõa as ações que o itrm fará?

//Casos de Udo do Item

// criar item já calculado
 export const create_iten = async (name, price, quantity) => {
    return {
        name,
        price,
        quantity,
        sub_total: () => price * quantity,
    }
}


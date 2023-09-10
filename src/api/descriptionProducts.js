const fetchDescriptionProducts = async(itemID) =>{
    // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const response = await fetch(`https://api.mercadolibre.com/items/${itemID}/description`)
    const data = await response.json();
    return data;
};

export default fetchDescriptionProducts;
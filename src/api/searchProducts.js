const searchProdutcs = async(query) =>{
    // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const data = await response.json();

    return data.results;
};

export default searchProdutcs
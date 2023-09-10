const fetchProdutcs = async() =>{
    // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1648')
    const data = await response.json();

    return data.results;
};

export default fetchProdutcs;
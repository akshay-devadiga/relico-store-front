export const processSubFilter = (filterType,products) => {
    switch (filterType){
        case 1: products = products.sort(function(a, b){return a.id-b.id});break;
        case 2: products = products.sort(function(a, b){return a.price-b.price});break;
        case 3: products = products.sort(function(a, b){return b.price-a.price});break;
    }
    return products;
}
const filterTypes = [{name:"Brands",value:"brandId"},{name:"Gender",value:"genderId"},{name:"Sizes",value:"sizes"},{name:"Colors",value:"colorId"}];
   

export const processSubFilter = (filterType,products) => {
    switch (filterType){
        case 1: products = products.sort(function(a, b){return a.id-b.id});break;
        case 2: products = products.sort(function(a, b){return a.price-b.price});break;
        case 3: products = products.sort(function(a, b){return b.price-a.price});break;
    }
    return products;
}


export const getAppliedFilters = (filterOptions) => {

 return filterOptions.map(filterOption=>{
    let filterType = filterTypes.find(filtertype=>filtertype.name == filterOption.name);
    return { name:filterOption.name,type:filterType.value, subfilters:filterOption.subfilters = filterOption.subfilters.filter(subFilter=>subFilter.value)};
}).filter(filterOption=>filterOption.subfilters.length>0);

}

export const filterProducts = (filterOptions,products) => {
    /*
        Generates set of applied filters
    */
   let appliedFilters = getAppliedFilters(filterOptions);
 
   /*
        Filters the products
   */
 let filteredProducts = [];
 let subFilteredProducts;
 appliedFilters.forEach(apFilter=>{
     apFilter.subfilters.forEach(subFilter=>{
          if(apFilter.type == 'sizes'){
            subFilteredProducts = products.filter(product=>product[apFilter.type]&&product[apFilter.type].some(size=>size.Id==subFilter.Id));
          }else{
            subFilteredProducts = products.filter(product=>product[apFilter.type]==subFilter.Id);
          }
          filteredProducts = filteredProducts.concat(subFilteredProducts);
     });
 });
 return filteredProducts;
}

export const filterBySearch = (searchText, products) => {
    products = products.filter(product => {
        return (
            product.name
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) != -1
        );
      });
 return products
}



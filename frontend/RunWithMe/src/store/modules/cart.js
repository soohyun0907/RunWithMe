import { products } from '../../data/products'
const state = {
    items: products,
    addToCart: "",
    addedToCart: [],
    removeToCart: "",
    totalCart: 0,
    ascOrder: '',
    filterProducts: products,
    brandFilter: '',
    filterData: '',
    orderBy: '',
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    brands: ["apple","huawei","sony","samsung","xiaomi","asus"],
    categories: ["Mobile" , "Speaker", "Furniture" , "Watch"],
    checkoutForm: [],
    checkoutFormAdded: "",
}

const getters = {
    getCheckoutForm: state => state.checkoutFormAdded,
    getTotalCart: state => state.totalCart,
    getFilterProducts: state => state.filterProducts,
    getItems: state => state.items,
    getCartItems: state => state.addToCart,
    getBrandsItem: state => state.brands,
    getCategoryItem: state => state.categories,
    getAddToCarts: state => state.addedToCart,
    brandsCount(state) {
        const counts = {};
        state.items.forEach(item => {
            counts[item.brand] = counts[item.brand] + 1 || 1;
        //    console.log(counts)
        });
           
        return counts;
       
    },    
}

const actions = {
    addCart({commit}, data){
        commit('ADD_CART', data)
    },
    addBrandToFilter({commit}, data){
        commit('ADD_BRAND_TO_FILTER', data)
    },
    addCategoryItem({commit},data){
        commit('ADD_BRAND_TO_CATEGORY', data)
    },
    removeBrandToFilter({commit}, data){
        commit('REMOVE_BRAND_FROM_FILTER', data)
    },
    ascendingOrderCart({commit}, data){
        commit('ASCENDING_ORDER_CART', data)
    },
    descendingOrderCart({commit}, data)
    {
        commit('DESCENDING_ORDER_CART', data)
    },
    totalCart({commit}, data)
    {
        commit('TOTAL_CART', data)
    },
    removeCart({commit}, data)
    {
        commit('REMOVE_CART_LIST', data)
    },
    addCheckoutAddress({commit}, data)
    {
        commit('ADD_CHECKOUT_FORM', data)
    },
    removeQty({commit}, data)
    {
        commit('REMOVE_QTY', data)
    },
    addQty({commit}, data)
    {
        commit('ADD_QTY', data)
    },
    
}

const mutations = {
    ADD_CHECKOUT_FORM(state, data){
        state.checkoutForm.push(data)
        state.checkoutFormAdded = data
        console.log(data)
    },
    TOTAL_CART(state, data){
       state.totalCart = state.addedToCart
       console.log( state.totalCart.forEach(item => item.productPrice) );
    },
    ADD_CART(state, data)
    {   
        let findId = state.addedToCart.find( product => product.id == data.id)
        if(findId){
            // console.log(findId)
            state.totalCart += data.productPrice
            data['qty']+=1; 
            // console.log(data);   
        }else{
            state.totalCart += data.productPrice
            data['qty']=1;
            state.addedToCart.push(data)
        }
    },
    REMOVE_QTY(state, data){
        let findId = state.addedToCart.find( product => product.id == data.id)
        if(findId){
            console.log(data.qty);
            
            if(data.qty > 1){
                state.totalCart -= data.productPrice
                data.qty-=1; 
                console.log(data.qty);
                
            }else{
                state.totalCart -= data.productPrice
                let index=state.addedToCart.indexOf(data);
                state.addedToCart.splice(index, 1)
                console.log('not working')
            }
        }

    },
    ADD_QTY(state, data){
        let findId = state.addedToCart.find( product => product.id == data.id)
        if(findId){
            if(data.qty < 10){
                state.totalCart += data.productPrice
                data.qty+=1; 
            }else{
                console.log('not working')
            }
        }

    },
    ADD_BRAND_TO_FILTER (state, checkedArray) {      
        state.filterProducts = state.items.filter( p => checkedArray.includes(p.brand) )
        if(state.filterProducts.length === 0){
            state.filterProducts = products
            console.log(state.filterProducts)
        }  
    },
    ADD_BRAND_TO_CATEGORY (state , data) {
        state.filterProducts = state.items.filter( p => p.category == data)
    },
    ASCENDING_ORDER_CART (state) {
        state.items.sort((a, b) => a.productPrice - b.productPrice)
    },
    DESCENDING_ORDER_CART() {
        state.items.sort((a, b) => b.productPrice - a.productPrice)  
    },
    REMOVE_CART_LIST(state,  data ) {
       state.totalCart -= data.qty * data.productPrice
    //    state.removeAddToCart = state.addedToCart
    let index = state.addedToCart.indexOf(data);
    state.addedToCart.splice(index, 1)

        // console.log(index);
        
    },
    
}
export default {
    state,
    getters,
    actions,
    mutations
}

export const orderByFilter = (arr, type ) => {
    if(!type) return arr;
    if(type === 'asc') {
        return arr.slice().sort((el1, el2) => el1.productPrice - el2.productPrice);
    } else {
        return arr.slice().sort((el1, el2) => el2.productPrice - el1.productPrice);
    }
};

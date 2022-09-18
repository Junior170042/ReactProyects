//for adding products to the  cart 

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// To delete product to cart

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const removeItem = (product) => {
    return {
        type: "DELALL",
        payload: product
    }
}


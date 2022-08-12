const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload

    switch (action.type) {

        case "ADDITEM":

            //See if the product already exists
            const existing = state.find(x => x.id === product.id);

            if (existing) {
                //increase the quantity
                return state.map(x => x.id === product.id ? { ...x, qty: parseInt(x.qty) + 1 } : x)
            } else {
                const product = action.payload;

                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELITEM":
            const exist = state.find(x => x.id === product.id);

            if (parseInt(exist.qty) === 1) {
                return state.map(x => x.id !== product.id);
            } else {
                return state.map(x => x.id === product.id ? { ...x, qty: parseInt(x.qty - 1) } : x)
            }

        case "DELALL":
            return state.filter(x => x.id !== product.id)

        default:
            return state;


    }

}

export default handleCart;
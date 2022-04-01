

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return { wishlist: [...state.wishlist, action.payload] };

        case "REMOVE_FROM_WISHLIST":
            return {
                wishlist: state.wishlist.filter(item => item._id !== action.payload)
            };

        default:
            return state;
    }
}

export { wishlistReducer };
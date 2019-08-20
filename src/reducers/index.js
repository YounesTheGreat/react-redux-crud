export const userReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload]; 
        case "REMOVE_USER":
            return state.filter(user => user.name !== action.payload.name);
        default:
            return state;
    }
};

export const secondReducer = (state = {}, action) => {
    return state;
};


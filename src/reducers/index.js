let nextUserId = 1;

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, { id: nextUserId++, ...action.payload }]; 
        case "REMOVE_USER":
            return state.filter(user => user.id !== action.payload.id);
        default:
            return state;
    }
};

export const secondReducer = (state = {}, action) => {
    return state;
};


export const initialState = null;

export const reducer = (state,action)=>{
    if (action.type === 'User'){
        return action.payload;
    }
    return state;

}
const initialState={
    cartData:[]
}
export default function cartItems(initialState,action)
{
   switch(action.type){
       case ADD_TO_CARD:
           return {
               ...state,
               cartData:action.data
           }
           break;
           default:
               return state;
   }
}
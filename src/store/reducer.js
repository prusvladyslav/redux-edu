import {combineReducers} from 'redux';
const defaultStore = {
    data: []
}
const defaultStoreModal = {
   modalOpen:false
}
export const allReducer = (state=defaultStore,action) => {
    switch (action.type){
        case "ADD": 
        return {...state,data:[...state.data,action.payload]}
  
    
        default: return state
      }
}
export  const modalOpen = (state=defaultStoreModal,action) => {
    switch (action.type){
        case 'OPEN_MODAL': 
        return {...state,modalOpen:action}

    default: return state
}
}

export const rootReducer = combineReducers({allReducer,modalOpen})
export const action = data => ({
type: "ADD",
payload: data
})
const getData = () =>
    fetch('./index.json')
        .then((response) => response.json())

export const fetchData = () => (dispatch, getState) => {
    

    getData()
        .then(data => {
            // console.log(data);
            dispatch(action(data))
        })
        
}
const initialState = {
    local_data:[],
}

export default function(state=initialState,action){
    switch(action.type){
        case 'SET_DATA':
            return {...state,local_data:action.payload}
        default:
            return {...state}
    }
}
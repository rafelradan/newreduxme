const initialState = {
    name: 'Rafael'
}

export default function (state = initialState, action){
    switch(action.type){
        case 'NEW' : 
            return{name: 'Danny'}
        
        default:
            return state;
    }
}
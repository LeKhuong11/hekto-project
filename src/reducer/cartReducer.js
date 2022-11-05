import { apiService } from "content/api"

const initialState = {
    list: []
}

function cartReducer(state = initialState, action){
    switch (action.type) {
        case apiService.setCart: {
            
            const newList = action.payload
            return {
                list: newList
            }
        }
        default:
            return state
    }
}

export default cartReducer
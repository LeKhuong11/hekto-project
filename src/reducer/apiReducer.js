import { apiService } from "content/api"

const initialState = {
    list: []
}


function ApiReducer(state = initialState, action){
    switch (action.type) {
        case apiService.getApi: {
            
            const newList = action.payload
            return {
                list: newList
            }
        }
        default:
            return state
    }
}

export default ApiReducer
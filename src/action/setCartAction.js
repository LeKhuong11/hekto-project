import { apiService } from "content/api"

export const setCartAction = (data) => {
    return {
        type: apiService.setCart,
        payload: data
    }
}
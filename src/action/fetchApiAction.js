import { apiService } from "content/api"

export const fetchApiAction = (data) => {
    return {
        type: apiService.getApi,
        payload: data
    }
}
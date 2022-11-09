import { callStart, callSusscess } from "./dataSlice";

export const getData = async (dispatch) => {
    dispatch(callStart)
    try {
        const res = await fetch('https://fe21-db.herokuapp.com/hekto')
        dispatch(callSusscess(res.json()))
    }
    catch (err) {
        console.log('error');
    }
}
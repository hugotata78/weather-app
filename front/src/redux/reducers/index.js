import { GET_CURRENT_WEATHER_DATA, GET_WEATHER_BY_CITY } from "../actions"

const initialState = {
    current_data:null,
    data_by_city:null,
}

const weatherReducers = (state=initialState,action)=>{
    switch(action.type){
        case GET_CURRENT_WEATHER_DATA:
            return{
                ...state,
                current_data:action.payload,
                data_by_city:null
            }
        case GET_WEATHER_BY_CITY:
            return{
                ...state,
                current_data: null,
                data_by_city:action.payload
            }
        default:
            return state
    }
}

export default weatherReducers
import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_CURRENT_WEATHER_DATA, RETURN_INITIAL_STATE } from "../actions"

const initialState = {
    current_data:null,
    data_by_city:null,
    error: false,
    loading:false,
}

const weatherReducers = (state=initialState,action)=>{
    switch(action.type){
        case GET_CURRENT_WEATHER_DATA:
            return{
                ...state,
                current_data:action.payload,
                data_by_city:null
            }
        case FETCH_DATA_REQUEST:
            return{
                current_data:null,
                data_by_city:null,
                error:false,
                loading:true
            }
        case FETCH_DATA_SUCCESS:
            return{
                current_data:null,
                data_by_city:action.payload,
                error:false,
                loading:false
            }
        case FETCH_DATA_ERROR:
            return{
                current_data:null,
                data_by_city:null,
                error:true,
                loading:false
            }
        case RETURN_INITIAL_STATE:
            return{
                current_data:null,
                data_by_city:null,
                error:false,
                loading:false  
            }
        default:
            return state
    }
}

export default weatherReducers
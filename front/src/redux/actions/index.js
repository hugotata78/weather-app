import axios from 'axios'

const apiKey = 'a300470270caeaa4b07d6bfb078bf57a'
export const GET_CURRENT_WEATHER_DATA = 'GET_CURRENT_WEATHER_DATA'
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const RETURN_INITIAL_STATE = 'RETURN_INITIAL_STATE'
export const GET_FORECAST_EXTENDED = 'GET_FORECAST_EXTENDED'


export const getCurrentWeatherData = (lat,lon)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            dispatch({
                type:GET_CURRENT_WEATHER_DATA,
                payload:response.data
            })
        } catch (error) {
            
        }
    }
}

export const fetchDataRequest = ()=>{
    return {
        type:FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data)=>{
    return {
        type: FETCH_DATA_SUCCESS,
        payload:data
    }
}

export const fetchDataError = ()=>{
    return{
        type:FETCH_DATA_ERROR
    }
}

export const returnInitialState = ()=>{
    return{
        type: RETURN_INITIAL_STATE
    }
}
export const getWeatherByCity = (city)=>{
    return async (dispatch)=>{
        try {
            dispatch(fetchDataRequest())
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            dispatch(fetchDataSuccess(response.data))
        } catch (error) {
            dispatch(fetchDataError())
        }
    }
}



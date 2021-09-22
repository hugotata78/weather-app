import axios from 'axios'

const apiKey = 'a300470270caeaa4b07d6bfb078bf57a'
export const GET_CURRENT_WEATHER_DATA = 'GET_CURRENT_WEATHER_DATA'
export const GET_WEATHER_BY_CITY = 'GET_WEATHER_BY_CITY'

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

export const getWeatherByCity = (city)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            dispatch({
                type:GET_WEATHER_BY_CITY,
                payload:response.data
            })
        } catch (error) {
            
        }
    }
}
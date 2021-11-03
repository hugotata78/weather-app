import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherData } from "../redux/actions";

const Paragraph = () => {
    const [t, i18n] = useTranslation(['paragraph'])
    const dispatch = useDispatch()
    const current_data = useSelector(state => state.weatherReducers.current_data)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            dispatch(getCurrentWeatherData(latitude, longitude, i18n.language))
        })
    }, [dispatch, i18n.language])

    const icon = current_data && current_data.weather[0].icon
    const description = current_data && current_data.weather[0].description
    return (
        <div className='paragraph'>
            <div className='w-data'>
                {
                    current_data &&
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={description}
                    />
                }
                <h3>{current_data && current_data.weather[0].description}</h3>
                <h4>{current_data && `${current_data.main.temp}°`}</h4>
            </div>
            <h2>Weather App</h2>
            <p>
                {t('content')}
            </p>
        </div>
    )
}

export default Paragraph
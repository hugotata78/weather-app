import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CardCurrentData from "../components/CardCurrentData";
import CardLoading from "../components/CardLoading";
import { getCurrentWeatherData } from "../redux/actions";

export const ContainerCurrentData = () => {

    const [t,i18n] = useTranslation(['searchbar'])
    const dispatch = useDispatch()
    const loading = useSelector(state => state.weatherReducers.loading)
    const current_data = useSelector(state => state.weatherReducers.current_data)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            dispatch(getCurrentWeatherData(latitude, longitude,i18n.language)) 
        })
    },[dispatch,i18n.language])
    return (
        <div>
            {loading && <CardLoading />}
            {current_data && <CardCurrentData data={current_data} />}
        </div>
    )
}
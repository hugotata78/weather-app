import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardLoading from "../components/CardLoading";
import CardDataCity from "../components/CardDataCity";
import CardError from '../components/CardError'
import { getWeatherByCity } from "../redux/actions";

export const ContainerCity = () => {

    const dispatch = useDispatch()
    const [t, i18n] = useTranslation(['card'])
    const data_by_city = useSelector(state => state.weatherReducers.data_by_city)
    const error = useSelector(state => state.weatherReducers.error)
    const loading = useSelector(state => state.weatherReducers.loading)
    const { city } = useParams()

    useEffect(() => {
        dispatch(getWeatherByCity(city, i18n.language))
    },[dispatch,city,i18n.language])

    return (
        <div>
            {loading && <CardLoading />}
            {data_by_city && <CardDataCity data={data_by_city} />}
            {error && <CardError />}
        </div>
    )
}
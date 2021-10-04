import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { returnInitialState } from '../redux/actions'


const CardCurrentData = ({ data }) => {

    const dispatch = useDispatch()
    const handleClick = e => {
        e.preventDefault()
        dispatch(returnInitialState())
    }

    return (
        <div className="card">

            <div className="top-row background-top-row">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h4> {data.name}</h4>
            </div>

            <div className="content">
                <div className='weather'>
                    <h3>{data.weather[0].description}</h3>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='img'/>
                </div>
                <p> Temp: {data.main.temp}</p>
                <p> Pressure: {data.main.pressure}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Visibility: {data.visibility}</p>
                <p>Wind: speed {data.wind.speed}</p>

                <button
                    className="button background-top-row"
                    onClick={e => handleClick(e)}
                >
                    Close
                </button>
            </div>

        </div>
    )
}

export default CardCurrentData
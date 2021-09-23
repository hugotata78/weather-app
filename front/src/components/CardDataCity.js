import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const CardDataCity = ({ data }) => {


    return (
        <div className="card">

            <div className="top-row background-top-row">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h4> {data.name}</h4>
            </div>

            <div className="content">
                <h2>Data</h2>
                <p> Temp: {data.main.temp}</p>
                <p> Pressure: {data.main.pressure}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Visibility: {data.visibility}</p>
                <p>Wind: speed {data.wind.speed}</p>
            </div>

        </div>
    )
}

export default CardDataCity
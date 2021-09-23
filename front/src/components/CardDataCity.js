import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { returnInitialState } from '../redux/actions'


const CardDataCity = ({ data }) => {

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
                <h2>Data</h2>
                <p> Temp: {data.main.temp}</p>
                <p> Pressure: {data.main.pressure}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Visibility: {data.visibility}</p>
                <p>Wind: speed {data.wind.speed}</p>
                <button
                    class="button background-top-row"
                    onClick={e=>handleClick(e)}
                >
                    Close
                </button>
            </div>

        </div>
    )
}

export default CardDataCity
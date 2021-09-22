import React from 'react'

const Card = ({ data }) => {

    console.log(data)
    return (
        <div class="card">

            <div class="top-row background-top-row">
                <h4>{data.name}</h4>
            </div>

            <div class="content">
                <h2>Data</h2>
                <p>Temp: {data.main.temp}</p>
                <p>Pressure: {data.main.pressure}</p>
                <p>Humidity: {data.main.humidity}</p>
                <p>Visibility: {data.visibility}</p>
                <p>Wind: speed {data.wind.speed}</p>
            </div>

        </div>
    )
}

export default Card
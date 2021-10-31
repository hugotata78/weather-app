import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

const CardCurrentData = ({ data }) => {

    const [t] = useTranslation(['card'])
    const history = useHistory()
    const handleClick = e => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <div className="card">

            <div className="top-row background-top-row">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h4> {data.name} {data.sys.country}</h4>
            </div>

            <div className="content">
                <div className='weather'>
                    <h3>{data.weather[0].description}</h3>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
                </div>
                <p>{t('temp')}: {data.main.temp}</p>
                <p> {t('pressure')}: {data.main.pressure}</p>
                <p>{t('humidity')}: {data.main.humidity}</p>
                <p>{t('visibility')}: {data.visibility}</p>
                <p>{t('winds')}: {t('speed')} {data.wind.speed}</p>

                <button
                    className="button background-top-row"
                    onClick={e => handleClick(e)}
                >
                    {t('close')}
                </button>
            </div>

        </div>
    )
}

export default CardCurrentData
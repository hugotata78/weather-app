import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const Paragraph = () => {
    const [t] = useTranslation(['paragraph'])
    return (
        <div className='paragraph'>
            <FontAwesomeIcon icon={faCloudSun}/>
            <h2>Weather App</h2>
            <p>
                {t('content')}
            </p>
        </div>
    )
}

export default Paragraph
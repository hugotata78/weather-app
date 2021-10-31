import React from "react";
import { useTranslation } from 'react-i18next'

const CardLoading = () => {
    const [t] = useTranslation(['loading'])
    return (
        <div className='card'>
            <div className="top-row background-top-row">
                <h2> {t('loading')}</h2>
            </div>
            <div className='content-loading'>
                <div className='loading'></div>
            </div>
        </div>
    )
}

export default CardLoading
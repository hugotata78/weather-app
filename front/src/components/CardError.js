import React from "react";
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router";

const CardError = () => {

    const [t,i18n] = useTranslation(['error'])
    const history = useHistory()
    
    const handleClick = e => {
        e.preventDefault()
        history.push('/')
        i18n.changeLanguage('es')
    }
    return (
        <div className='card'>
            <div className="top-row background-top-row">
                
                <h2> 404</h2>
            </div>
            <div className='content'>
                <div className='error'>
                    <h2>{t('ops')}</h2>
                    <h3>{t('msg')}</h3>
                </div>
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

export default CardError
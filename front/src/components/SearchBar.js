import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const SearchBar = ({ onSearch, getInfoMyLocation,handleChage, handleOnClick }) => {

    const [t,i18n] = useTranslation(['searchbar'])    
   
    
    return (
        <div className='navBar'>

            <div className='nav-menu'>
                <div className='title'>
                    <button
                        className='btn'
                        onClick={e => handleOnClick(e)}
                    >
                        <FontAwesomeIcon icon={faHouseUser} title={t('home')} />
                        <span className='text-menu'>{t('home')}</span>
                    </button>
                    <button
                        className='btn'
                        onClick={getInfoMyLocation}
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} title={t('current')} />
                        <span className='text-menu'>{t('current')}</span>
                    </button>
                </div>
                <div className='search-form'>
                    <nav>
                        <input
                            type='search'
                            placeholder={t('search')}
                            onChange={e => handleChage(e)}
                        />
                        <button
                            className='btn-nav'
                            onClick={e => onSearch(e)}
                        >
                            <FontAwesomeIcon icon={faSearch} title={t('search')} />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
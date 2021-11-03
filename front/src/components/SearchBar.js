import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faGlobe, faHouseUser, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const SearchBar = ({ onSearch, getInfoMyLocation, handleChage }) => {

    const [t, i18n] = useTranslation(['searchbar'])
    const lang = i18n.language === 'es' ? t('spanish') : t('english')
    const [cls, setCls] = useState(false)
    const subMenu = !cls ? 'sub-menu-none' : 'sub-menu-block'
    const [clsTitle, setClsTitle] = useState(false)
    const classTitle = !clsTitle ? 'title' : 'title-2'

    const changeSubMenu = (e) => {
        e.preventDefault()
        if (cls) {
            setCls(!cls)
        } else {
            setCls(!cls)
        }
    }

    const changeClsTitle = (e) => {
        if (clsTitle) {
            setClsTitle(!clsTitle)
        } else {
            setClsTitle(!clsTitle)
        }
    }

    const handleOnClickEs = (e) => {
        e.preventDefault()
        i18n.changeLanguage('es')
        setCls(!cls)
        setClsTitle(!classTitle)

    }

    const handleOnClickEn = (e) => {
        e.preventDefault()
        i18n.changeLanguage('en')
        setCls(!cls)
        setClsTitle(!classTitle)
    }

    console.log(clsTitle)
    return (
        <div>
            <button className='label-icon' onClick={changeClsTitle}><FontAwesomeIcon icon={faBars} /></button>
            <div className='navBar'>
                <ul className={classTitle}>
                    <li>
                        <Link to='/'
                            className='btn'
                            onClick={changeClsTitle}
                        >
                            <FontAwesomeIcon icon={faHouseUser} title={t('home')} />
                            <span className='text-menu'>{t('home')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/my-location'
                            className='btn'
                            onClick={changeClsTitle}
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} title={t('current')} />
                            <span className='text-menu'>{t('current')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='btn-sub-menu'
                            onClick={changeSubMenu}
                        >
                            <FontAwesomeIcon icon={faGlobe} title={t('language')} />
                            <span className='text-menu'>{lang}</span>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        <ul className={subMenu}>
                            <li>
                                <Link onClick={handleOnClickEs}>
                                    {t('spanish')}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={handleOnClickEn}>
                                    {t('english')}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form>
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
                </form>

            </div>
        </div>
    )
}

export default SearchBar
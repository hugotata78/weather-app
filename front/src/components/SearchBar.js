import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ onSearch, getCurrentData }) => {

    const [city, setCity] = useState('')

    const handleChage = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className='container-nav'>
            <div className='icon-menu'>
                <input type='checkbox' id='check'/>
                <label for='check'>
                <FontAwesomeIcon icon={faBars}/>
                </label>
            </div>
            <div className='title'>
                <button
                    className='btn'
                    onClick={e => getCurrentData(e)}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} title='Current Location Data' />
                    {' '} Current Location Data
                </button>
            </div>
            <div className='search-form'>
                <nav>
                    <input
                        type='search'
                        placeholder='Search'
                        onChange={e => handleChage(e)}
                    />
                    <button
                        className='btn-nav'
                        onClick={e => onSearch(e, city)}
                    >
                        <FontAwesomeIcon icon={faSearch} title='search'/>
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar
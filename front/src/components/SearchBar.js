import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ onSearch, getCurrentData }) => {

    const [city, setCity] = useState('')

    const handleChage = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className='container-nav'>
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
                        className='btn'
                        onClick={e => onSearch(e, city)}
                    >
                        Search
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar
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
                    onClick={e => getCurrentData(e)}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} title='Current Location Data' />
                    <span className='title-btn'>
                        Current Location Data
                    </span>
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
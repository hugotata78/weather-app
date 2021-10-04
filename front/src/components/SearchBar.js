import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { returnInitialState } from "../redux/actions";

const SearchBar = ({ onSearch, getCurrentData }) => {

    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const handleChage = (e) => {
        setCity(e.target.value)
    }

    const handleOnClick = (e)=>{
        e.preventDefault()
        dispatch(returnInitialState())
    }
    return (
        <div className='navBar'>
            
            <div className='nav-menu'>
                <div className='title'>
                    <button
                        className='btn'
                        onClick={e => handleOnClick(e) }
                    >
                        <FontAwesomeIcon icon={faHouseUser} title='Current Location Data' />
                        <span className='text-menu'>Home</span>
                    </button>
                    <button
                        className='btn'
                        onClick={e => getCurrentData(e)}
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} title='Current Location Data' />
                        <span className='text-menu'> Current Location Data</span>
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
                            <FontAwesomeIcon icon={faSearch} title='search' />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
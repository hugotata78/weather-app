import React from 'react'
import en from '../img/united_kingdom.png'
import es from '../img/spain.png'
import { Link } from 'react-router-dom'


export const Languages = ({ handleOnClickEs, handleOnClickEn }) => {
     

    return (
        <div className='languages'>
            <div className='container-flags'>
                <Link onClick={handleOnClickEs}>
                    <img src={es} alt="spain" />
                </Link>
                <Link href='/en' onClick={handleOnClickEn}>
                    <img src={en} alt="united_kingdom" />
                </Link>
            </div>
        </div>
    )
}
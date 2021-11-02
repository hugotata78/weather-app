import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NavBar = ()=>{
    const [t] = useTranslation(['searchbar'])
    return(
        <div className='navbar'>
            <div className='container-items'>
                <div></div>
                <div>
                    <Link to='/' className='item'>
                    {
                        t('home')
                    }
                    </Link>
                    <Link to='/my-location' className='item'>
                    {
                        t('current')
                    }
                    </Link>
                </div>
            </div>
        </div>
    )
}
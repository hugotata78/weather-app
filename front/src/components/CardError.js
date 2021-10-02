import React from "react";
import { useDispatch } from "react-redux";
import { returnInitialState } from '../redux/actions'

const CardError = () => {

    const dispatch = useDispatch()
    const handleClick = e => {
        e.preventDefault()
        dispatch(returnInitialState())
    }
    return (
        <div className='card'>
            <div className="top-row background-top-row">
                
                <h2> 404</h2>
            </div>
            <div className='content'>
                <div className='error'>
                    <h2>Ops! </h2>
                    <h3>Information not found</h3>
                </div>
                <button
                    className="button background-top-row"
                    onClick={e => handleClick(e)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default CardError
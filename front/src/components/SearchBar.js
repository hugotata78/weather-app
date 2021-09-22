import React from "react";

const SearchBar = ()=>{
    return(
        <div className='container-nav'>
            <div className='title'>
                <h3>App Weather</h3>
            </div>
            <div className='search-form'>
                <nav>
                    <input type='search' placeholder='Search'/>
                    <button>Search</button>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar
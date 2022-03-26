import React from 'react';
import { BsStopwatchFill } from "react-icons/bs";
import './Header.css'

/*------------------
       navbar
------------------ */
const Header = () => {
    return (
        <div className='header-section'>
            <h1 className='text-center text-primary main-name'>Random Watch</h1>
            <h1 className='text-center text-primary clock'><BsStopwatchFill/></h1>
        </div>
    );
};

export default Header;
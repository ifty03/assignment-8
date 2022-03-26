import React from 'react';
import { BsStopwatchFill } from "react-icons/bs";
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <h1 className='text-center text-primary main-name'>Dialing for Watch</h1>
            <h1 className='text-center text-primary clock'><BsStopwatchFill/></h1>
        </div>
    );
};

export default Header;
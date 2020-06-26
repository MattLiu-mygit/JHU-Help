import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <div className='jumbotron'>
            <h1>JHU Help</h1>
            <p>A database for help resources.</p>
            <p>(Still under construction)</p>
        </div>
        <h4>Check out our Covid-19 pandemic resources!</h4>
        <Link to='/covid-19' className='btn btn-primary'>Covid-19 Help</Link>
        <p></p>
        <Link to='/contact' className='btn btn-primary'>Contact us Maybe a curtain menu for this</Link>
    </>
}
export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <div className='jumbotron'>
            <h1>JHU Help</h1>
            <p>(Still under construction)</p>
        </div>
        <h4>Check out our Covid-19 pandemic resources!</h4>
        <Link to='/covid-19' className='btn btn-primary'>Covid-19 Resources</Link>
        <p></p>
        <h4>Maryland 911 Alternatives</h4>
        <Link to='/maryland-911-alternatives' className='btn btn-primary'>Maryland 911 Alternatives</Link>
        <p></p>
        <h4>Help us help you!</h4>
        <Link to='/help-us' className='btn btn-primary'>Help us help you!</Link>
    </>
}
export default HomePage;
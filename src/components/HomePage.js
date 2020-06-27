import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <div className='jumbotron'>
            <h1>JHU Help</h1>
        </div>
        <h4>
            <b>
                <Link to='/covid-19' >Check out our Covid-19 pandemic resources!</Link>
                <p></p>
                <Link to='/maryland-911-alternatives' >Maryland 911 Alternatives</Link>
                <p></p>
                <Link to='/help-us' >Help us help you!</Link>
            </b>
        </h4>
    </>
}
export default HomePage;
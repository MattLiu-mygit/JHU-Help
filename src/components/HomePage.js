import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <div className='jumbotron'>
        <h1>JHU Help</h1>
        <p>Help resources.</p>
        <Link to='/contact' className='btn btn-primary'>Contact us Maybe a curtain menu for this</Link>

    </div>
}
export default HomePage;
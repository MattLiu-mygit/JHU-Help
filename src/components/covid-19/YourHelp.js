import React from 'react';
import Collapsible from '../Collapsible';
import { Link } from 'react-router-dom';

const YouHelp = () => {
    return <>
        <h2>How you can help in the pandemic!</h2>
        <h5>Help our Healthcare Workers</h5>
        <Collapsible title='Maryland Responds Reserve Medical Corps' content={<>
            <p>Open to all: licensed health care professionals, students, or even volunteers interested in Emergency Response.</p>
            <p>Volunteer <a href='https://mdresponds.health.maryland.gov/'>here</a>.</p>
        </>} />
        <Collapsible title='Girl Scout Cookies for Healthcare Workers' content={<>
            <p>Learn more <a href='https://www.girlscouts.org/en/cookie-care.html'>here</a>.</p>
            <p>You can buy a few boxes for yourself!</p>
        </>} />
        <Collapsible title='Sew and Donate Homemade Face Masks' content={<>
            <p>Refer to the Face Mask DIY Project <Link to='/covid-19/diy-fun'>here</Link>.</p>
        </>} />
        <Collapsible title='Feed it Forward' content={<>
            <p>Money from PekoPeko's Feed it Forward program goes towards feeding Baltimore’s healthcare workers and meal programs for vulnerable Baltimoreans. </p>
            <p>The donations will also help PekoPeko continue to employ its staff, which are made mostly of local Baltimoreans too. </p>
            <p>Find out more <a href='https://pekopekoramen.com/'>here</a>.</p>
        </>} />
        <Collapsible title='Cards for Courage' content={<>
            <p>Donate cards and art supplies to Cards for Courage. </p>
            <p>The organization is creating appreciation cards to healthcare workers due to the pandemic. </p>
            <p>If you are in CALIFORNIA, one of the Cards for Courage Hopkins branch founders is looking for people to help her create these cards as well.</p>
            <p>Email cardsforcourage20@gmail.com for more info.</p>
        </>} />
    </>
}
export default YouHelp;
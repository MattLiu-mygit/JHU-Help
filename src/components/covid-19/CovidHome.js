import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SurveyTable from './SurveyTable';
import MentalEmotionalHelp from './MentalEmotionalHelp';
import NotFoundPage from '../NotFoundPage';
import UnstableIncomePage from './UnstableIncomePage';

const CovidHome = () => {

    return (<>
        <div className='jumbotron'>
            <h1>Covid-19 Pandemic Resources</h1>
            <h3>Check out the following resources:</h3>
            <Link to='/covid-19/mental-emotional' className='btn btn-primary'>Mental and Emotional Resources</Link>
            <span style={{ marginLeft: '1rem' }}><Link to='/covid-19/unstable-income' className='btn btn-primary'>Unstable Income</Link></span>
        </div>
        <Switch>
            <Route path='/covid-19/mental-emotional' component={MentalEmotionalHelp} />
            <Route path='/covid-19/unstable-income' component={UnstableIncomePage} />
            <Route path='/covid-19' exact component={SurveyTable} />
            <Route component={NotFoundPage} />
        </Switch>
    </>);
}
export default CovidHome;
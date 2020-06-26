import React from 'react';
import HomePage from './HomePage';
import ContactPage from './covid-19/ContactPage';
import Header from './common/Header';
//import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPAge from './NotFoundPage';
//import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CovidHome from './covid-19/CovidHome';

function App() {
    //     function getPage () {
    //         const route = window.location.pathname;
    //         if (route === '/courses') return <CoursesPage />;
    //         if (route === '/about') return <AboutPage />;
    //         return <HomePage />
    //     }
    return <div className='container-fluid'>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Switch>
            <Route path='/' exact component={HomePage} />
            {
                //<Route path='/courses' component={CoursesPage} />
                //<Route path='/course' component={ManageCoursePage} />
                //<Route path='/course/:slug' component={ManageCoursePage} />
            }
            <Route path='/covid-19' component={CovidHome} />
            <Route path='/contact' component={ContactPage} />
            <Redirect from='/about-page' to='/about' />
            <Route component={NotFoundPAge} />
        </Switch>
    </div>
}

export default App;
import React from 'react';

const CovidHome = () => {
    return (<>
        <div className='jumbotron'>
            <h1>Covid-19 Pandemic Resources</h1>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Issue</th>
                    <th>Response Percent</th>
                </tr>
            </thead>
            <tbody>
                <td>Personal Mental Health Issues</td>
                <td>46.77%</td>
            </tbody>
        </table>
    </>);
}
export default CovidHome;
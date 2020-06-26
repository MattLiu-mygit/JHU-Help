import React, { useState, useEffect } from 'react';
import { getData } from '../../api/SgaSurveyResultsApi';

const SurveyTable = () => {
    const [SGAData, setSGAData] = useState([]);
    useEffect(() => {
        getData().then(data => setSGAData(data));
    }, []);
    return <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Issue</th>
                    <th>Response Percent</th>
                </tr>
            </thead>
            <tbody>
                {//SGAData.map(data => <tr><td>{data.label}</td><td>{data.percentage}</td></tr>)
                }
                <tr><td>Personal Mental Health Issues</td><td>46.77%</td></tr>
                <tr><td>Take care of relatives/siblings/etc</td><td>33.48%</td></tr>
                <tr><td>Unstable home environment</td><td>29.01%</td></tr>
                <tr><td>Unstable income</td><td>25.31%</td></tr>
                <tr><td>Lack of reliable internet</td><td>	25.11%</td></tr>
                <tr><td>Lack of resources</td><td>23.69%</td></tr>
                <tr><td>Disadvantageous time zones</td><td>22.13%</td></tr>
                <tr><td>Other</td><td>15.65%</td></tr>
                <tr><td>Working to supplement income</td><td>9.73%</td></tr>
                <tr><td>Covid-19 related sickness/death</td><td>5.23%</td></tr>
            </tbody>
        </table>
    </>
}
export default SurveyTable;
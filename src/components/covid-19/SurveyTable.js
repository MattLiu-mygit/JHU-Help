import React from 'react';
//import { getData } from '../../api/SgaSurveyResultsApi';
import { Link } from 'react-router-dom';

const SurveyTable = () => {
    //const [SGAData, setSGAData] = useState([]);
    /*useEffect(() => {
        getData().then(data => setSGAData(data));
    }, []);*/
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
                <tr><td><Link to='/covid-19/mental-emotional'>Personal Mental Health Issues</Link></td><td>46.77%</td></tr>
                <tr><td><Link to='/covid-19/mental-emotional'>Take care of relatives/siblings/etc.</Link></td><td>33.48%</td></tr>
                <tr><td><Link to='/covid-19/mental-emotional'>Unstable home environment</Link></td><td>29.01%</td></tr>
                <tr><td><Link to='/covid-19/unstable-income'>Unstable income</Link></td><td>25.31%</td></tr>
                <tr><td><Link to='/covid-19/resource-insecurity'>Lack of reliable internet</Link></td><td>	25.11%</td></tr>
                <tr><td><Link to='/covid-19/resource-insecurity'>Lack of resources</Link></td><td>23.69%</td></tr>
                <tr><td><Link to='/covid-19/college-help'>Disadvantageous time zones</Link></td><td>22.13%</td></tr>
                <tr><td>Other</td><td>15.65%</td></tr>
                <tr><td><Link to='/covid-19/unstable-income'>Working to supplement income</Link></td><td>9.73%</td></tr>
                <tr><td><Link to='/covid-19/mental-emotional'>Covid-19 related sickness/death</Link></td><td>5.23%</td></tr>
            </tbody>
        </table>
    </>
}
export default SurveyTable;
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import SearchRecords from './SearchRecords';
import { Constants } from '../shared/Constants';

const Layout = () => {

    /*********Define Variables for getting User Data************/
    const [cityName, setcityName] = useState("");
    const [weatherStatus, setWeatherStatus] = useState("");
    const [showTable, setShowTable] = useState(false);
    const searchContainerRef = React.useRef(null);

    /*********Get User Json File Data (No Input Params)************/
    // useEffect(() => {
    //     axios.get(Constants.weatherApi+'?q='+cityName+'&APPID='+Constants.APP_ID)
    //         .then((response) => {
    //             console.log(response);
    //             //setWeatherStatus(response.data);
    //         })
    // }, []);

    /*********Trigger Search Button Event (Params: Name as a search keyword)************/
    const _getResults = () => {
        try {
            axios.get(Constants.weatherApi + '?q=' + cityName + '&&units='+Constants.weatherUnit+'&APPID=' + Constants.APP_ID)
                .then((response) => {
                    const result = response.data.list.reduce((days, row) => {
                        const date = row.dt_txt.split(' ')[0];
                        days[date] = [...(days[date] ? days[date] : []), row];
                        return days;
                    }, {});

                    //   const arrayUniqueByKey =array.map(item => item.dt_txt)
                    //   .filter((value, index, self) => self.indexOf(value) === index)
                    setWeatherStatus(result);
                    setShowTable(true);
                    console.log(result)
                    //setWeatherStatus(response.data);
                }).catch(function (err) {
                    console.log(err);
                    setShowTable(false);
                })
        }
        catch (err) {
            console.log(err)
            setWeatherStatus(false);
        }
    }

    return (
        <Row className="row position-center mx-auto" ref={searchContainerRef}>
            <Col className='text-center'>
                <div className="input-icons">
                    <img className='search-icon' src="search.svg" width={40} height={50} alt="search-icon" />
                    <input type="search" name="search-form" id="search-form" className="search-input" placeholder="City Name" value={cityName}
                        onChange={(e) => setcityName(e.target.value)} />
                    <Button variant="primary"onClick={_getResults}>Search</Button>
                </div>
                {(!showTable && cityName) ? <div className='text-center text-danger'>{Constants.noRecordFoundMsg}</div> : null}
            </Col>
            <Col lg="12">
                {(showTable && Object.keys(weatherStatus).length > 0) ? <SearchRecords weatherStatus={weatherStatus} /> : null}
            </Col>
        </Row>
    );
}
export default Layout;
import React from 'react'
import { Constants } from '../shared/Constants';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import "bootstrap-icons/font/bootstrap-icons.css";


/*****Search Records Function with Props (User) */
const SearchRecords = (props) => {
  return (
       <Table striped bordered hover>
        <thead>
          <tr>
            {Constants.tableHeaderItems.map(item => <th key={item.itemName}>{item.itemName}</th>)}
          </tr>
        </thead>
        <tbody>
           { Object.entries(props.weatherStatus).map((item, counter) => <tr key={counter}>
              <td>{item[0]}</td>
              <td>{item[1][0]['main']['temp_min']} </td>
              <td>{item[1][0]['main']['temp_max']}</td>
              <td> 
                 <i className={`bi ${Constants.weatherIcons[item[1][0]['weather'][0]['main']]}`}></i> 
               </td>
            </tr>) }
        </tbody>
      </Table> 
  );
 }

 SearchRecords.propTypes = {
  weatherStatus: PropTypes.object
}
export default SearchRecords
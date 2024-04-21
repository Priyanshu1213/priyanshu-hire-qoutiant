import React, { useState} from 'react';

import {  IconButton } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import './Groupbyasset.css'

const Groupbyasset = ({ assetClassname, items,length }) => {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <div className="admin-table">
  <div className="admin-table-header">
    <div className="expand-icon">
      <IconButton onClick={handleClick} className="expand-button">
        {open ? <KeyboardArrowUp className="arrow-icon" /> : <KeyboardArrowDown className="arrow-icon" />}
      </IconButton>
    </div>
    <div className="asset-classname">{assetClassname}({length})</div>
  </div>

  {open && (
    <div className="table-row">

   
      <tr >
        <th>Name</th>
        <th>Ticker</th>
        <th>Asset Class</th>
        <th>Average Price</th>
        <th>Market Price</th>
        <th>Latest Change %</th>
        <th>Market Value in Base CCY</th>
      </tr>
    
  
    {items.map((data, index) => (
      
      <tr  key={index}>
        <td>{data.name}</td>
        <td>{data.ticker}</td>
        <td>{data.asset_class}</td>
        <td>{data.avg_price}</td>
        <td>{data.market_price}</td>
        <td>{data.latest_chg_pct}</td>
        <td>{data.market_value_ccy}</td>
      </tr>
      
    ))}
     
      </div>
  )}
</div>

    
    );
  };
  export default Groupbyasset;
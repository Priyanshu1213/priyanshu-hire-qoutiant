import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './HoldingsTable.css'
import Groupbyasset from '../Groupbyasset/Groupbyasset';

const HoldingsTable = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://canopy-frontend-task.now.sh/api/holdings');
        setHoldings(response.data.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const groupbyasset = {};

  holdings.forEach(holding => {
    const assetClass = holding.asset_class;
    if (!groupbyasset[assetClass]) {
      groupbyasset[assetClass] = [];
    }
    groupbyasset[assetClass].push(holding);
  });

  return (
    <div className='container'>
      
          {Object.keys(groupbyasset).map((item, index) => (
            <Groupbyasset key={index}  assetClassname={item} items={groupbyasset[item]} length={groupbyasset[item].length} />
          ))}
        
    </div>
  );
};





export default HoldingsTable;

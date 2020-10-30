import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, Bar, ComposedChart} from 'recharts';

// const txData1 = [
//   {date: '04/10/2020', daily: 4, total: 4}, 
//   {date: '04/11/2020', daily: 5, total: 9},
//   {date: '04/12/2020', daily: 6, total: 15},
//   {date: '04/13/2020', daily: 7, total: 22},
//   {date: '04/14/2020', daily: 8, total: 30},
//   {date: '04/15/2020', daily: 9, total: 39},
//   {date: '04/16/2020', daily: 10, total: 49},
// ];
// const Data1 = [
//   {date: '04/10/2020', daily: 4, total: 4}, 
//   {date: '04/11/2020', daily: 5, total: 9},
//   {date: '04/12/2020', daily: 6, total: 15},
//   {date: '04/13/2020', daily: 7, total: 22},
//   {date: '04/14/2020', daily: 8, total: 30},
//   {date: '04/15/2020', daily: 9, total: 39},
//   {date: '04/16/2020', daily: 10, total: 49},
// ];
 export default function Statistics() {  
  const [Data1, setData1] = useState(Array);
  const [txData1, setTxData1] = useState(Array);
  useEffect(() => {
    fetch('https://api.npoint.io/40a14a62494ab4a09385')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData1(data)
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
    fetch('https://api.npoint.io/cbcd508f14d345f62392')
    .then(response => response.json())
    .then(data => {
      setTxData1(data)
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
  }, []);

  return (
    <Layout>
        <SectionDiv>
            <h1>Statistics of (X.Y) custodian</h1>
            <h4>A demo of the current funds residing in custodian <a href="https://npoint.io">https://npoint.io</a></h4>
            <ComposedChart
        width={1000}
        height={500}
        data={Data1}
        syncId="anyId"
        margin={{
          top: 20, right: 30, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#3d91F9"/>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Total balance" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />  
        <Bar name="daily influx of funds"dataKey="daily" barSize={20} fill="#3D91F9" />   
        <Brush>
            <LineChart data={Data1}>
            <Line type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />    
            </LineChart>

        </Brush>
      </ComposedChart>
      <h4> A demo of the daily txs being created in custodian <a href="https://npoint.io">https://npoint.io</a></h4>
      <ComposedChart
        width={1000}
        height={500}
        syncId="anyId"
        data={txData1}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#3d91F9" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="daily # of txs" dataKey="daily" barSize={20} fill="#3D91F9" />
        <Line name="total # of txs" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />
        <Brush>
         <LineChart data={txData1}>
         <Line name="total # of txs" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />    
         </LineChart>
        </Brush>
      </ComposedChart>
            <p><b>Please note:</b> We simply received these statistics from the operator of the specified Custodian. 
                This does in no way mean we are in any way affiliated with them. We merely display them for educational purposes.</p>

        </SectionDiv>
    </Layout>
)}

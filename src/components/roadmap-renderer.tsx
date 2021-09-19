// import React, {useState, useEffect} from "react";
// import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Gitgraph } from "@gitgraph/react";
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, Bar, ComposedChart} from 'recharts';
// import SectionDiv from "./section-div";

// // fix charts size on mobile
// const RoadmapRenderer = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

// const toggle = () => setDropdownOpen(prevState => !prevState);
// const [lastClicked, setLastClicked] = useState<number>(1); // any overrides undef


// // GIT GRAPHS
// let endpoint: string = `https://updates.moneypot.dev/v0`; // TBD

// const [gitData, setgitData] = useState(undefined)
// const getData = () => fetch(endpoint).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));

// useEffect(() => {
//   setgitData(undefined)
//   // != 4 do not fetch
//   getData().then((data) => {setgitData(data[lastClicked])})
// }, [lastClicked])

// if (gitData === undefined && lastClicked != 4)  {
//     return <div>Fetching gitData!</div>
// }


// return (
//     <div >
//     <div style={{ width: 300, height: 100, }}>
//       <br/>
//     <Dropdown isOpen={dropdownOpen} toggle={toggle} color="yellow">
//       <DropdownToggle caret>
//         Switch
//       </DropdownToggle>
//       <DropdownMenu container="body">
//   <DropdownItem onClick={() => setLastClicked(0)}>Wallet commit history {lastClicked === 0 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem>
//         <DropdownItem onClick={() => setLastClicked(1)}> Custodian commit history {lastClicked === 1 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem>
//         <DropdownItem onClick={() => setLastClicked(2)}>Web commit history {lastClicked === 2 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem>
//         <DropdownItem onClick={() => setLastClicked(3)}>Library commit history {lastClicked === 3 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem>
//         <DropdownItem onClick={() => setLastClicked(4)}>Testnet custodian statistics {lastClicked === 4 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem>
//         {/* <DropdownItem onClick={() => setLastClicked(4)}>Roadmap {lastClicked === 4 && <FontAwesomeIcon icon="check" style={{ color: 'black'}}/> }</DropdownItem> */}
//       </DropdownMenu>
//     </Dropdown>
//   </div>
//     {lastClicked != 4 ? <Gitgraph>
//       {(gitgraph) => {
//         // Simulate git commands with Gitgraph API.
//         gitgraph.import(gitData); 
//       }}
//     </Gitgraph> : <Statistics domain="testnet.moneypot.dev" statistics="https://updates.moneypot.dev/v1"/>}
//   </div>
//   )
// }
//  // only one domain so we can do it like this for now


// export default RoadmapRenderer

// function Statistics(props: {statistics: string, domain: string}) {  
//   const [data, setData] = useState<Array<Array<{date: string, daily: number, total: number}>> | undefined>(undefined); // needs typing
//   useEffect(() => {
//     fetch(props.statistics)
//     .then(response => response.json())
//     .then(data => {
//       setData(data)
//     })
//     .catch(err => {
//       console.error('Fetch error:', err);
//     });

//   }, []);

//   if (data === undefined) { 
//     return <p>Fetching data!</p>
//   }

//   return (
//         <SectionDiv>
//             <h1>Statistics of ({props.domain})</h1>
//             <h4>A demo of the total amount of current funds residing in <a href={`https://` + props.domain}>{props.domain}</a></h4>
//             <ComposedChart
//         width={1000}
//         height={500}
//         data={data[0]}
//         syncId="amounts"
//         margin={{
//           top: 20, right: 30, left: 20, bottom: 20,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" stroke="#3d91F9"/>
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line name="Total balance" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />  
//         <Bar name="daily influx of funds"dataKey="daily" barSize={20} fill="#3D91F9" />   
//         <Brush>
//             <LineChart data={data[0]}>
//             <Line type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />    
//             </LineChart>

//         </Brush>
//       </ComposedChart>
//       <h4> A demo of the daily txs being created in <a href={`https://` + props.domain}>{props.domain}</a></h4>
//       <ComposedChart
//         width={1000}
//         height={500}
//         syncId="txs"
//         data={data[1]}
//         margin={{
//           top: 20, right: 20, bottom: 20, left: 20,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" stroke="#3d91F9" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar name="daily # of txs" dataKey="daily" barSize={20} fill="#3D91F9" />
//         <Line name="total # of txs" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />
//         <Brush>
//          <LineChart data={data[1]}>
//          <Line name="total # of txs" type="monotone" dataKey="total" stroke="#3D91F9" activeDot={{ r: 8 }} />    
//          </LineChart>
//         </Brush>
//       </ComposedChart>
//             <p><b>Please note:</b> We simply received these statistics from the operator of the specified custodian. 
//                 This does in no way mean we are in any way affiliated with them. We merely display them for educational purposes.</p>

//         </SectionDiv>
// )}

import React, {useState} from 'react';
import logo from '../assets/images/logo 3.svg';
import { AgCharts } from 'ag-charts-react';

const Main = () => {

  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
        { month: 'Jan', avgTemp: 2.3, Sales: 162000 },
        { month: 'Mar', avgTemp: 6.3, Sales: 302000 },
        { month: 'May', avgTemp: 16.2, Sales: 800000 },
        { month: 'Jul', avgTemp: 22.8, Sales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, Sales: 950000 },
        { month: 'Nov', avgTemp: 8.9, Sales: 200000 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: 'bar', xKey: 'month', yKey: 'Sales' }],
});

const [options, setOptions] = useState({
  title: {
    text: "Usage vs Quality of Assets",
  },
  data: [
    { month: 20, val: 0, val1: 100 },
    { month: 40, val: 2, val1: 200 },
    { month: 60, val: 4, val1: 300 },
    { month: 80, val: 6, val1: 400 }
  ],
  series: [
    {
      type: "area",
      xKey: "month",
      yKey: "val",
      yName: "Total Quality Score",
    },
    {
      type: "area",
      xKey: "month",
      yKey: "val",
      yName: "Total Quality Score",
    },
    {
      type: "area",
      xKey: "month",
      yKey: "val",
      yName: "Total Quality Score",
    },
  ],
});

const [options1, setOptions1] = useState({
  data: [
    { month: 20, val: 0, val1: 100 },
    { month: 40, val: 2, val1: 200 },
    { month: 60, val: 4, val1: 300 },
    { month: 80, val: 6, val1: 400 }
  ],
  title: {
    text: "80%",
  },
  series: [
    {
      type: "pie",
      angleKey: "month",
      legendItemKey: "val",
    },
  ],
});

  return (
    <div className="main">

      <div className="report-container">
        <div className="report-body">
          <div className="report-topic-heading">
            <h1 style={{color:"red",textDecoration:"underline",marginTop:"13px"}}>Summary</h1>
            <h1 style={{marginTop:"13px",marginRight:"50%"}}>Detailed DQ Analysis</h1>
          </div>
        </div>
      </div>

      <div className="report-container2">
        <div className="report-body">
          <div className="report-topic-heading">
       <h1 style={{marginTop:"13px",border:"1px solid #938585", padding:"10px"}}>Set Reminder <i class="fa fa-envelope-o" aria-hidden="true"></i></h1>
       <h1 style={{marginTop:"13px",border:"1px solid #938585", padding:"10px"}}>LOB <i class="fa fa-caret-down" aria-hidden="true"></i></h1>
       <h1 style={{marginTop:"13px",border:"1px solid #938585", padding:"10px"}}>Default Today (GMT) <i class="fa fa-caret-down" aria-hidden="true"></i></h1>
          </div>
        </div>
      </div>

      <div className="report-container" style={{marginTop:"20px"}}>
        <div className="report-header">
          <h1 className="recent-Articles">Automated Data Quality Report - LOB: All</h1>
          {/* <button className="view">View All</button> */}
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h1>Assets Scanned</h1>
            <h1>Rows Analyzed</h1>
            <h1>Cells Analyzed/hr</h1>
            <h1>Rules Passed</h1>
            <h1>Rules Failed</h1>
            <h1>Overall Quality Score</h1>
          </div>

          <div className="items">
            <div className="item1">
              <h2>273</h2>
              <h2>378M</h2>
              <h2>24.6M</h2>
              <h2 style={{color:"green"}}>2774</h2>
              <h2 style={{color:"red"}}>1897</h2>
              <h2>
                <AgCharts options={chartOptions} />
                
              </h2>
            </div>

            
          </div>
        </div>
      </div>

      <div className="report-container1">
        <div className='demo'>
        <AgCharts options={options} />
        </div>
        <div className='demo'>
        <div className="report-header">
          <h1 className="recent-Articles">Asset Spotlight</h1>
          {/* <button className="view">View All</button> */}
        </div>
        <div className="report-body">
          <div className="report-topic-heading" style={{marginLeft:"20%"}}>
            <h1>Asset Name</h1>
            <h1>Profiled</h1>
            <h1>Quality</h1>
            <h1>Reconcilation</h1>
            <h1>Data Drift</h1>
          </div>

          <div className="items">
            <div className="item1">
              <h2>Scheme<br></br>
              PROD_OLAP_BSLAMC_VW.SF_SCHEME_DIM
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
            </div>

            
          </div>
          <div className="items">
            <div className="item1">
              <h2>Folio<br></br>
              PROD_OLAP_BSLAMC_VW.SF_FOLIO_MF
              </h2>
              
              <h2>
                <AgCharts options={options1} />
                
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
            </div>

            
          </div>
          <div className="items">
            <div className="item1">
              <h2>Distributor Non-Individual<br></br>
              PROD_OLAP_BSLAMC_VW.SF_DISTRIBUTOR_MF
              </h2>
              
              <h2>
                <AgCharts options={options1} />
                
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
              <h2>
              <AgCharts options={options1} />
              </h2>
            </div>

            
          </div>
        </div>
        </div>
      </div>

      {/* <div className="box-container"> */}
      {/* <img src={logo} class="" alt="content" style={{width: "100%"}} /> */}
        {/* <div className="box box1">
          <div className="text">
            <h2 className="topic-heading">60.5k</h2>
            <h2 className="topic">Article Views</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
            alt="Views"
          />
        </div>

        <div className="box box2">
          <div className="text">
            <h2 className="topic-heading">150</h2>
            <h2 className="topic">Likes</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
            alt="likes"
          />
        </div>

        <div className="box box3">
          <div className="text">
            <h2 className="topic-heading">320</h2>
            <h2 className="topic">Comments</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
            alt="comments"
          />
        </div>

        <div className="box box4">
          <div className="text">
            <h2 className="topic-heading">70</h2>
            <h2 className="topic">Published</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
            alt="published"
          />
        </div>


      </div> */}

      
    </div>
  );
};

export default Main;

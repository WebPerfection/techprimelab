
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./Chat.css"
import axios from "axios"
const BarChart = () => {
    // State variables
    const [projectData, setProjectData] = useState(null);
  
    // Fetch data from the backend
    useEffect(() => {
      axios.get("http://localhost:8080/project/dashboard")
        .then(res => setProjectData(res.data))
        .catch(err => console.log(err));
    }, []);
  
    // Check if data is available before rendering the chart
    if (!projectData) {
      return <div>Loading...</div>;
    }
  
    // Prepare the chart data
    const chartData = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["STR", "FIN", "QLT", "MAN", "STO", "HR"]
        }
      },
      series: [
        {
          name: "Total",
          data: [
            projectData.Total_STR,
            projectData.Total_FIN,
            projectData.Total_QLT,
            projectData.Total_MAN,
            projectData.Total_STO,
            projectData.Total_HR
          ]
        },
        {
          name: "Closed",
          data: [
            projectData.Total_STR_Closed,
            projectData.Total_FIN_Closed,
            projectData.Total_QLT_Closed,
            projectData.Total_MAN_Closed,
            projectData.Total_STO_Closed,
            projectData.Total_HR_Closed
          ]
        }
      ]
    };
  
    return (
      <div className="Project_parent" style={{padding:"20px"}}>
        {/* Display other project data */}
        
        <div className="project">
            <div className="Total-pro">
                <h4>Total-Project</h4>
                <h1>{projectData && projectData.Total}</h1>
            </div>
            <div className="closed">
                <h4>Closed</h4>
            <h1>{projectData && projectData.Closed}</h1>
            </div>
            <div className="running">
                <h4>Running</h4>
                <h1>{projectData && projectData.Running}</h1>
            </div>
            <div className="closure">
                <h4>Closure Delay</h4>
            <h1>1</h1>
            </div>
            <div className="cancelled">
                <h4>Cancelled</h4>
                <h1>{projectData && projectData.Canceled}</h1>
            </div>
        </div>
        
        <h3>Department wise - Total Vs Closed</h3>
        {/* Render the chart */}
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="50%"
          className="chart-card"
        />
      </div>
    );
  };
  
  export default BarChart;
  
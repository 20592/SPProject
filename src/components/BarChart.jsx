import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  
  return (
    <React.Fragment>
      <div className="bg-white  rounded-lg my-7 ml-7 pt-2 hover:scale-105 transition duration-200">
        <Chart
          type="bar"
          width={706}
          height={370}
          backgroundColor="acqua"
          paddingTop={42}
          marginLeft={30}
          series={[
            {
              name: "Spend Ananlysis",
              data: [2100, 900, 600, 3200, 1100]
             
            },
          ]}
          options={{
            title: {
              text: "Spend Ananalysis",
              style: {
                fontSize: 18,
                fontFamily: "cairo",
                fontWeight: 600,
                color: "#311B4E",
                lineHeight: 1,
              },
              
            },

            subtitle: {
              text: "Top Spending Categories",
              style: {
                fontSize: 11,
                color: "#5B5B5B",
                fontFamily: "cairo",
                fontWeight: 600,
              },
            },

            plotOptions: {
              bar: {
                borderRadius: 5,
                horizontal: true,
                /*colors: ["#ffff", "#3BEBe", "#6418C3", "#F6EEFF", "#F6EEFF"],*/
                
              },
            },
            stroke: {
              width: 1,
              dashArray: 1,
              color: "#24292e",
              opacity: 0.4,
            },

           xaxis: {
              tickPlacement: "off",
              
             categories: [
                "Tech",
                "Operations",
                "Sanitations",
                "Office Supplies",
                "Marketing",
              ],
              
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "12", colors: ["#5B5B5B"]},
              },
            },

            legend: {
              show: false,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 12,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;

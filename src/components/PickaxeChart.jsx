import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function getHighChartsOptions(data) {
  return {
    chart: {
      type: "spline",
    },

    title: {
      text: "Number of views for a region", // Don't display a chart title
    },

    xAxis: {
      type: 'datetime',
    },

    yAxis: {
      title: {
        text: "Views"
      },
    },

    tooltip: {
      pointFormat: '<span style=\"color:{point.color}\">●</span> {series.name} Views: <b>{point.y}</b><br/>'
    },

    colors: ["#2ac8dd", "#fa6e58", "#fbd14a"],

    series: data,
  }
}

// With Highcharts
const PickaxeChart = (props) => {
  const options = getHighChartsOptions(props.data);

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default PickaxeChart;
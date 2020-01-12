import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function getHighChartsOptions(data) {
  return {
    chart: {
      type: "spline",
    },

    title: {
      text: undefined, // Don't display a chart title
    },

    xAxis: {
      type: 'datetime',
    },

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
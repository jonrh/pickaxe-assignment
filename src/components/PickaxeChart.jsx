import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/**
 * Returns a Highcharts configuration object that specifies how the chart should look and feel. It
 * receives a data object which is a Highchart compatible series object.
 */
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
      pointFormat: '<span style="color:{point.color}">●</span> {series.name} Views: <b>{point.y}</b><br/>'
    },

    colors: ["#2ac8dd", "#fa6e58", "#fbd14a"],

    series: data,
  }
}

/** Displays a Highcharts smooth line chart for number of views in a given region over time. */
const PickaxeChart = (props) => {
  const options = getHighChartsOptions(props.data);

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default PickaxeChart;
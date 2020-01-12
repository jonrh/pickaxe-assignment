import React, {FunctionComponent} from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import moment from "moment";

function getHighChartsOptions2(data) {
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

    // This works in JavaScript, but there seems to be some type conflict :(
    series: [
      {
        name: "unknown",
        data: [
          [moment("2020-01-02T00:00:00.000Z").valueOf(), 3743],
          [moment("2020-01-03T00:00:00.000Z").valueOf(), 3361],
          [moment("2020-01-04T00:00:00.000Z").valueOf(), 4254],

          // [Date.UTC(2020, 1,  2), 3743],
          // [Date.UTC(2020, 1,  3), 3361],
          // [Date.UTC(2020, 1,  4), 4254],
        ]
      }
    ],
  }
}

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
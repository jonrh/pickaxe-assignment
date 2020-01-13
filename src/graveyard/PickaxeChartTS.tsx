import React, {FunctionComponent} from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {ChartSeries} from "../index";
import {chartTransform} from "../transforms/Transform";
import moment from "moment";

interface Props {
  data: ChartSeries
}

function getHighChartsOptions(data: ChartSeries): Highcharts.Options {
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
    series: [],
  }
}

// With Highcharts using TypeScript. Abandoned because I ran into

/**
 * An attempt to use Highcharts with TypeScript. Abandoned as I ran into type compatibility issues
 * with the series object. Due to time constraints I just used JavaScript instead, see the file
 * src/components/PickaxeChart.jsx for the implementation that was ultimately used.
 */
const PickaxeChartTS: FunctionComponent<Props> = (props: Props) => {
  const options = getHighChartsOptions(props.data);

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default PickaxeChartTS;
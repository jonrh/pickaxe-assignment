import React, {FunctionComponent} from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {TableLine} from "../index";

interface Props {
  data: [TableLine]
}

const options: Highcharts.Options = {
  title: {
    text: undefined,
  },
  series: [{
    type: 'line',
    data: [1, 2, 3]
  }]
};

// With Highcharts
const PickaxeChart: FunctionComponent<Props> = (props: Props) => {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default PickaxeChart;
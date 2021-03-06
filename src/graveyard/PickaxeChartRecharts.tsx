import React, {FunctionComponent} from "react";
import {LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer} from "recharts";

import {TableLine} from "../index";

interface Props {
  data: [TableLine]
}

const data = [
  {
    "name": "A",
    "uv": 400,
    "pv": 240,
    "amt": 2400
  }, {
    "name": "B",
    "uv": 300,
    "pv": 456,
    "amt": 2400
  }, {
    "name": "C",
    "uv": 300,
    "pv": 139,
    "amt": 2400
  }, {
    "name": "D",
    "uv": 200,
    "pv": 980,
    "amt": 2400
  },
  {
    "name": "E",
    "uv": 278,
    "pv": 390,
    "amt": 2400
  },
  {
    "name": "F",
    "uv": 189,
    "pv": 480,
    "amt": 2400
  }
];

/**
 * With Recharts. Abandoned using Recharts because I couldn't find an easy ready-made solution
 * to having the X axis be an automatic time scale. Switched to Highcharts instead. See the file
 * src/components/PickaxeChart.jsx for the chart implementation that was used.
 */
const PickaxeChartRecharts: FunctionComponent<Props> = (props: Props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
        <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
      </LineChart>
    </ResponsiveContainer>
  );
};
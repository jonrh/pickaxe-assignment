import React, {FunctionComponent} from "react";
import Table from "react-bootstrap/Table";

import {TableLine} from "../index";

interface Props {
  data: [TableLine]
}

/**
 * A responsive Bootstrap table that displays something like this:
 *
 *    Date | Metric | Region | Value
 *    Jan1   Views    ca       123
 *    Jan2   Views    us       123
 *    Jan3   Views    unknown  123
 */
const PickaxeTable: FunctionComponent<Props> = (props: Props) => {
  return (
    <Table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Metric</th>
        <th>Region</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      {
        // For every line in the table
        props.data.map((line, index) => {
          return (
            <tr key={index}>
              <td>{line.timestamp}</td>
              <td>{line.metric}</td>
              <td>{line.region}</td>
              <td>{line.value}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
  );
};

export default PickaxeTable;
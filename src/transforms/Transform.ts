import moment from "moment";

import { data } from "../data";
import { DataPoint, DataPoints } from "../index";

export function testOutput() {
  console.log(data);

  data.forEach(entry => {
    // Just doing it hacky for now to get some data flowing
    const timestamp = moment(entry.timestamp).format("MMMD");
    const metric = entry.metrics[0].friendlyName;
    const region = entry.dimensions[0].value;
    const value = entry.metrics[0].value;

    console.log(`Date: ${timestamp}, metric: ${metric}, region: ${region}, value: ${value}`);
  });
}

/**
 * Transforms the provided JSON data into a data structure that is suitable for display in a table.
 *
 * Note: currently it assumes the exact structure of the provided JSON. That is, we fetch the first
 * [0] element in the metrics and dimensions arrays. In practice we may not be guaranteed that
 * those arrays only contain one element.
 *
 * Note: this function assumes there exist values for everything. It would be nice to safely get
 * the values and provide default values if none exist. That is, make this data transformation
 * function more robust to edge cases.
 */
export function tableTransform(data: DataPoints) {
  return data.map((entry: DataPoint) => {
    return {
      timestamp: moment(entry.timestamp).format("MMMD"),
      metric: entry.metrics[0].friendlyName,
      region: entry.dimensions[0].value,
      value: entry.metrics[0].value,
    }
  });
}

export function chartTransform(data: DataPoints) {
  // Todo add type
  let regions: any = {};

  // For each data point in the JSON
  data.forEach((entry: DataPoint) => {
    const timestamp = entry.timestamp;
    const region = entry.dimensions[0].value;
    const value = entry.metrics[0].value;

    // Add the metric value (number of views) to the region it belongs to
    if (region in regions) {
      regions[region].push([timestamp, value])
    } else {
      regions[region] = [[timestamp, value]];
    }
  });

  return Object.entries(regions).map(([region, dataPoints]) => {
    return {
      name: region,
      data: dataPoints
    };
  });
}

/** Returns a list of unique regions from the provided dataset */
export function getUniqueRegions(data: DataPoints): string[] {
  const allRegions = data.map((entry) => entry.dimensions[0].value);
  const uniqueRegions = new Set(allRegions);

  return Array.from(uniqueRegions); //
}


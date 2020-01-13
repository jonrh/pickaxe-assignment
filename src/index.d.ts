interface Dimension {
  id: number,
  name: string,
  friendlyName: string,
  // Note: in given dataset it's string but generally could be something else
  value: string, // "us", "ca", "unknown", etc
}

interface Metric {
  id: number,
  name: string,
  friendlyName: string,
  value: number // Note: in given dataset it's integers but generally could be something else
}

/** One data point in the provided JSON */
interface DataPoint {
  timestamp: string, // ISO 8601 date time string, "2020-01-02T00:00:00.000Z"
  dimensions: Dimension[],
  metrics: Metric[],
}

/** The type of the provided JSON document */
export type DataPoints = DataPoint[];

/**
 * One line in the table we display below the graph.
 *
 *    Date | Metric | Region | Value
 *    Jan1   Views    ca       123
 *    Jan2   Views    us       123
 *    Jan3   Views    unknown  123
 *
 */
export interface TableLine {
  timestamp: string, // "Jan1", "Jan31"
  metric: string, // "Views"
  region: string, // "us", "ca", "unknown", etc
  value: number,
}

// Types that were meant to be used to feed into a Highcharts series object. However I ran into
// type compatibility issues which I wasn't able to solve due to time constraints. Looking at the
// Highcharts documentation this should be compatible but I may be doing a silly mistake somewhere.
type ChartSerieDataPoint = [string, number];

export interface ChartSerie {
  name: string, // "us", "ca", "unknown"
  data: ChartSerieDataPoint[]
}

export type ChartSeries = ChartSerie[];
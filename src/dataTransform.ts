import { data } from "./data";

// Ran into issues importing JSON into TypeScript, was of type Module but not Array as I would
// have expected. Going to leave this for may to later and get on with the transformations.
// import * as data from "./data.json";

export function testOutput() {
  console.log(data);

  data.forEach(entry => {
    // Just doing it hacky for now to get some data flowing
    const timestamp = entry.timestamp;
    const metric = entry.metrics[0].friendlyName;
    const region = entry.dimensions[0].value;
    const value = entry.metrics[0].value;

    console.log(`Date: ${timestamp}, metric: ${metric}, region: ${region}, value: ${value}`);
  });
}


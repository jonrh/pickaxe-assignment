import moment from "moment";

import { data } from "../data";
import {chartTransform, getUniqueRegions} from "./Transform";

test("unique regions should be us, ca, unknown", () => {
  expect(getUniqueRegions(data).sort()).toEqual(["unknown", "ca", "us"].sort());
  expect(getUniqueRegions(data).sort()).toEqual(["us", "ca", "unknown"].sort());
  expect(getUniqueRegions(data).sort()).toEqual(["ca", "us", "unknown"].sort());
  expect(getUniqueRegions(data).sort()).toEqual(["ca", "unknown", "us"].sort());
});


test("chartTransform returns the expected output", () => {
  const unixTime = (dateTime: string) => moment(dateTime).valueOf(); // In milli seconds

  const actual = chartTransform(data);
  const expected = [
    {
      name: "unknown",
      data: [
        [unixTime("2020-01-02T00:00:00.000Z"), 3743],
        [unixTime("2020-01-03T00:00:00.000Z"), 3361],
        [unixTime("2020-01-04T00:00:00.000Z"), 4254],
        [unixTime("2020-01-05T00:00:00.000Z"), 3731],
        [unixTime("2020-01-06T00:00:00.000Z"), 3147],
        [unixTime("2020-01-07T00:00:00.000Z"), 3529],
        [unixTime("2020-01-08T00:00:00.000Z"), 4346],
        [unixTime("2020-01-09T00:00:00.000Z"), 2245]
      ]
    },
    {
      name: "us",
      data: [
        [unixTime("2020-01-02T00:00:00.000Z"), 326484],
        [unixTime("2020-01-03T00:00:00.000Z"), 312514],
        [unixTime("2020-01-04T00:00:00.000Z"), 345289],
        [unixTime("2020-01-05T00:00:00.000Z"), 336700],
        [unixTime("2020-01-06T00:00:00.000Z"), 293539],
        [unixTime("2020-01-07T00:00:00.000Z"), 285198],
        [unixTime("2020-01-08T00:00:00.000Z"), 291301],
        [unixTime("2020-01-09T00:00:00.000Z"), 167741]
      ]
    },
    {
      name: "ca",
      data: [
        [unixTime("2020-01-02T00:00:00.000Z"), 43281],
        [unixTime("2020-01-03T00:00:00.000Z"), 41245],
        [unixTime("2020-01-04T00:00:00.000Z"), 44725],
        [unixTime("2020-01-05T00:00:00.000Z"), 47593],
        [unixTime("2020-01-06T00:00:00.000Z"), 39423],
        [unixTime("2020-01-07T00:00:00.000Z"), 37326],
        [unixTime("2020-01-08T00:00:00.000Z"), 39688],
        [unixTime("2020-01-09T00:00:00.000Z"), 23324]
      ]
    },
  ];

  expect(actual).toEqual(expected);
});
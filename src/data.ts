import {DataPoints} from "./index";

// Ran into issues importing JSON into TypeScript, was of type Module but not Array as I would
// have expected. I have run into this before but forgot how to figure it out. To save time I am
// cheating a bit by defining the data here in this TypeScript file. The added benefit is it has
// types.

// The data as provided by the assignment.
export const data: DataPoints = [
  {
    "timestamp": "2020-01-02T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 3743
      }
    ]
  },
  {
    "timestamp": "2020-01-02T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 326484
      }
    ]
  },
  {
    "timestamp": "2020-01-02T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 43281
      }
    ]
  },
  {
    "timestamp": "2020-01-03T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 3361
      }
    ]
  },
  {
    "timestamp": "2020-01-03T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 312514
      }
    ]
  },
  {
    "timestamp": "2020-01-03T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 41245
      }
    ]
  },
  {
    "timestamp": "2020-01-04T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 4254
      }
    ]
  },
  {
    "timestamp": "2020-01-04T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 345289
      }
    ]
  },
  {
    "timestamp": "2020-01-04T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 44725
      }
    ]
  },
  {
    "timestamp": "2020-01-05T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 3731
      }
    ]
  },
  {
    "timestamp": "2020-01-05T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 336700
      }
    ]
  },
  {
    "timestamp": "2020-01-05T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 47593
      }
    ]
  },
  {
    "timestamp": "2020-01-06T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 3147
      }
    ]
  },
  {
    "timestamp": "2020-01-06T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 293539
      }
    ]
  },
  {
    "timestamp": "2020-01-06T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 39423
      }
    ]
  },
  {
    "timestamp": "2020-01-07T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 285198
      }
    ]
  },
  {
    "timestamp": "2020-01-07T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 37326
      }
    ]
  },
  {
    "timestamp": "2020-01-07T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 3529
      }
    ]
  },
  {
    "timestamp": "2020-01-08T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 291301
      }
    ]
  },
  {
    "timestamp": "2020-01-08T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 39688
      }
    ]
  },
  {
    "timestamp": "2020-01-08T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 4346
      }
    ]
  },
  {
    "timestamp": "2020-01-09T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "us"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 167741
      }
    ]
  },
  {
    "timestamp": "2020-01-09T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "ca"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 23324
      }
    ]
  },
  {
    "timestamp": "2020-01-09T00:00:00.000Z",
    "dimensions": [
      {
        "id": 3, "name": "region", "friendlyName": "Region", "value": "unknown"
      }
    ],
    "metrics": [
      {
        "id": 1, "name": "views", "friendlyName": "Views", "value": 2245
      }
    ]
  }
];

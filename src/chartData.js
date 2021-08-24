export const schema = [
  {
    "id": 1,
    "kind": "wrapper",
    "type": "chart",
    "parent": null,
    "xAxis": {
      "label": "Date",
      "tickFormat": "formatDateAsDayMonth"
    },
    "yAxis": {
      "label": "Total jobs"
    },
    "api": {
      "url": "anomaly",
      "method": "GET"
    }
  },
  {
    "id": 2,
    "kind": "group",
    "parent": 1
  },
  {
    "id": 3,
    "kind": "simple",
    "type": "line",
    "parent": 2,
    "props": {
      "x": "created_date",
      "y": "failed_count"
    }
  },
  {
    "id": 4,
    "kind": "simple",
    "type": "scatter",
    "parent": 2,
    "props": {
      "x": "created_date",
      "y": "failed_anomaly",
      "size": 7,
      "style": {
        "data": {
          "fill": "#c43a31"
        }
      }
    }
  }
];

export const apiData = {
  "items": [
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-10-31"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-01"
    },
    {
      "failed_count": 32,
      "failed_anomaly": 32,
      "created_date": "2020-11-02"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-03"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-04"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-05"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-06"
    },
    {
      "failed_count": 11,
      "failed_anomaly": 11,
      "created_date": "2020-11-07"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-08"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-09"
    },
    {
      "failed_count": 24,
      "failed_anomaly": null,
      "created_date": "2020-11-10"
    }
  ],
  "type": "nonGrouped"
}
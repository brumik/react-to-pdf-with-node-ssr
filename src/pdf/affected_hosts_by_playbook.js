import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartTopLevelType,
  ChartType,
  ChartThemeColor,
} from 'react-json-chart-builder';

const name = 'Hosts changed by job template';

const description =
  'The number of hosts changed by a job template in a specified time window.\n\nYou can use this report to find discrepancies in the host change rate at a particular time, helping you drill down to when and why hosts were unreachable at a particular time.';


const tableHeaders = [
  { key: 'id', value: 'ID' },
  { key: 'name', value: 'Template name' },
  { key: 'total_unique_host_count', value: 'Total unique hosts' },
  {
    key: 'total_unique_host_changed_count',
    value: 'Total unique hosts changed',
  },
];

const schema = [
  {
    id: 1,
    kind: ChartKind.wrapper,
    type: ChartTopLevelType.chart,
    parent: null,
    props: {
      height: 350,
      padding: {
        top: 0,
        bottom: -20,
      },
      domainPadding: {
        y: 25,
      },
      themeColor: ChartThemeColor.multiOrdered,
    },
    xAxis: {
      label: 'Date',
      tickFormat: 'formatDateAsDayMonth',
    },
    yAxis: {
      tickFormat: 'formatNumberAsK',
      showGrid: true,
      label: 'Total unique hosts',
      style: {
        axisLabel: {
          padding: 55,
        },
      },
    },
    api: {
      url: '',
      params: {},
    },
    legend: {
      interactive: false,
      orientation: ChartLegendOrientation.horizontal,
      position: ChartLegendPosition.bottom,
    },
  },
  {
    id: 2,
    kind: ChartKind.group,
    parent: 1,
    template: {
      id: 0,
      kind: ChartKind.simple,
      type: ChartType.line,
      parent: 0,
      props: {
        x: 'created_date',
        y: 'total_unique_host_count',
      },
    },
  },
];

const reportParams = {
  tableHeaders,
  schema,
  name,
  description,
};

export default reportParams;

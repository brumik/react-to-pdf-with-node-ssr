import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import Report from './pdf/Report';
import { apiData } from './pdf/tempMockup';
import { getReport } from './pdf/schemas/index';

const App = ({ label, y, xTickFormat, slug }) => {
  const report = getReport(slug);

  return (
    <>
      <Report
        tableHeaders={report.tableHeaders}
        data={apiData} /* TODO */
        schema={report.schemaFnc(label, y, xTickFormat)}
        name={report.name}
        description={report.description}
      />
    </>
  );
};

export default App;

import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import reports from './pdf/affected_hosts_by_playbook';
import Report from './pdf/Report';
import { apiData } from './pdf/tempMockup';

const App = ({ report = 'not supplied' }) => {
  return (
    <>
      <p>THIS IS SPARTA: {report}</p>
      <Report
        tableHeaders={reports.tableHeaders}
        data={apiData}
        schema={reports.schema}
      />
    </>
  );
};

export default App;

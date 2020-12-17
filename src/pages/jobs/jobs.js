import React, { useState } from "react";
import CardMidHFullW from "../../components/CardMidHFullW";
import CardMidHSmW from "../../components/CardMidHSmW";
import { useQuery, gql } from "@apollo/client";
import Stats from "../../components/Stats";
import { config, createBars, layout_bars } from "../../_helpers/_helpers";
import BarChart from "../../components/BarChart";

const JOBS_QUERY = gql`
  query GetJobStatus {
    jobStatus {
      label
      value
    }
  }
`;

const JOBS_INCOME = gql`
  query JobsByAvgIncome {
    jobsByAvgIncome(last: 20) {
      label
      value
    }
  }
`;

function JobsPage() {
  const { loading: loadJStatus } = useQuery(JOBS_QUERY, {
    onCompleted: (data) => setJobStatus(data.jobStatus),
  });

  const {} = useQuery(JOBS_INCOME, {
    onCompleted: (data) => {
      setJobsByIncome(data.jobsByAvgIncome);
      setDataPlot(createBars(data.jobsByAvgIncome));
    },
  });

  const [jobStatus, setJobStatus] = useState(null);
  const [jobsByIncome, setJobsByIncome] = useState(null);
  const [dataPlot, setDataPlot] = useState(null);

  return (
    <div className="page-container">
      <CardMidHSmW>
        <>
          <div className="card-header">Jobs kpis</div>
          <div className="card-body">
            {jobStatus && (
              <>
                <div className="card-header">jobs status</div>
                <Stats data={jobStatus} />
              </>
            )}
            {jobsByIncome && (
              <>
                <div className="card-header">better income (USD$/year)</div>
                <Stats data={jobsByIncome.slice(0, 3)} />
              </>
            )}
          </div>
        </>
      </CardMidHSmW>
      <CardMidHSmW></CardMidHSmW>
      <CardMidHSmW></CardMidHSmW>
      <CardMidHFullW>
        <div className="card-body">
          {dataPlot && (
            <>
              <div className="card-header">Best income per year</div>
              <BarChart
                data={dataPlot}
                config={config}
                className="bar-plot"
                layout={layout_bars("USD$/year")}
              />
            </>
          )}
        </div>
      </CardMidHFullW>
    </div>
  );
}

export default JobsPage;

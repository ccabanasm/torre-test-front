import React from "react";
import Plot from "react-plotly.js";

function BarChart(props) {
  return (
    <Plot
      data={props.data}
      config={props.config}
      layout={props.layout}
      className={props.className}
      useResizeHandler={true}
    />
  );
}

export default BarChart;

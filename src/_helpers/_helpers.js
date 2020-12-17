export function unpack(arreglo, clave) {
  return arreglo.map(function (fila) {
    return fila[clave];
  });
}

export function getSum(a, b) {
  return a + b;
}

export function handleNumber(number, minDecimalDigits, maxDecimalDigits) {
  if (!number) {
    return "N/I";
  }
  return number.toLocaleString(undefined, {
    minimumFractionDigits: minDecimalDigits,
    maximumFractionDigits: maxDecimalDigits,
  });
}

export function createBars(array) {
  return [
    {
      x: unpack(array, "label"),
      y: unpack(array, "value"),
      // name: "Real",
      opacity: 0.9,
      type: "bar",
    },
  ];
}

export const config = {
  responsive: "true",
  displayModeBar: false,
  scrollZoom: false,
};

export function layout_bars(label) {
  // barmode: 'stack',
  return {
    xaxis: {
      linecolor: "#DDD",
      showgrid: false,
      gridcolor: "#aaaaaa",
      tickformat: "%d %b",
    },
    yaxis: {
      linecolor: "#DDD",
      title: label,
      tickformat: ",d",
      gridcolor: "#cecdcd",
    },
    fixedrange: true,
    font: {
      color: "#DDD",
      size: 10,
    },
    plot_bgcolor: "rgba(0,0,0,0)",
    paper_bgcolor: "rgba(0,0,0,0)",
    title: false,
    autosize: true,
    margin: {
      l: 60,
      r: 20,
      b: 40,
      t: 10,
    },
    legend: {
      orientation: "h",
    },
  };
}

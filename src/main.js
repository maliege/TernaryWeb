import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import Plotly from 'plotly.js-dist';

const data = [
  ['Group 1', 0.1934, 0.7736, 0.0328],
  ['Group 2', 0.2898, 0.6763, 0.0338],
  ['Group 3', 0.3679, 0.5519, 0.08],
  ['Group 4', 0.4748, 0.4748, 0.0503],
  ['Group 5', 0.578, 0.3853, 0.0366],
  ['Group 6', 0.6829, 0.2926, 0.0343]
];


const container = document.getElementById('grid');
const hot = new Handsontable(container, {
  data,
  colHeaders: ['Group', 'A', 'B', 'C'],
  rowHeaders: true,
  licenseKey: 'non-commercial-and-evaluation'
});

const plotContainer = document.getElementById('plot');
const scaleSelect = document.getElementById('scaleSelect');
const aNameInput = document.getElementById('aname');
const bNameInput = document.getElementById('bname');
const cNameInput = document.getElementById('cname');

function updatePlot() {
  const plotData = hot.getData().map(row => ({
    a: row[1],
    b: row[2],
    c: row[3]
  }));

  const tracePoints = {
    type: 'scatterternary',
    mode: 'markers',
    a: plotData.map(d => d.a),
    b: plotData.map(d => d.b),
    c: plotData.map(d => d.c),
    marker: {
      symbol: 100,
      color: '#FF6347',
      size: 14
    }
  };

  const traces = [tracePoints];

  if (plotData.length >= 3) {
    const tracePolygon = {
      type: 'scatterternary',
      mode: 'lines',
      a: [...plotData.map(d => d.a), plotData[0].a],
      b: [...plotData.map(d => d.b), plotData[0].b],
      c: [...plotData.map(d => d.c), plotData[0].c],
      line: {
        color: '#1f77b4',
        width: 2
      },
      fill: 'toself',
      fillcolor: 'rgba(31, 119, 180, 0.2)'
    };
    traces.push(tracePolygon);
  }

  const scale = scaleSelect.value === '1' ? 1 : 100;

  const layout = {
    ternary: {
      sum: scale,
      aaxis: {
        title: {
          text: aNameInput.value,
          font: { size: 14 }
        },
        min: 0,
        max: scale,
        linecolor: 'red',
        gridcolor: 'red',
        ticks: 'outside',
        dtick: scale / 10
      },
      baxis: {
        title: {
          text: bNameInput.value,
          font: { size: 14 }
        },
        min: 0,
        max: scale,
        linecolor: 'green',
        gridcolor: 'green',
        ticks: 'outside',
        dtick: scale / 10
      },
      caxis: {
        title: {
          text: cNameInput.value,
          font: { size: 14 }
        },
        min: 0,
        max: scale,
        linecolor: 'blue',
        gridcolor: 'blue',
        ticks: 'outside',
        dtick: scale / 10
      }
    },
    showlegend: false,
    dragmode: 'zoom',
    margin: { t: 50, b: 50, l: 50, r: 50 }
  };

  Plotly.newPlot(plotContainer, traces, layout);
}

hot.addHook('afterChange', updatePlot);
scaleSelect.addEventListener('change', updatePlot);
updatePlot();

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import LineChart from './components/linechart/linechart'
import GaugeChart from './components/gaugechart/gaugechart'

// Load google chart packages
google.charts.load('current', {packages: ['corechart','gauge']})
// Set up callback to draw char afetr loading packages
google.charts.setOnLoadCallback(init)

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.data = new google.visualization.DataTable();
    this.data.addColumn('number', 'X');
    this.data.addColumn('number', 'Dogs');
    this.data.addRows([
      [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
      [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
      [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
      [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
      [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
      [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
      [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
      [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
      [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
      [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
      [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
      [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    this.options = {
      hAxis: {
        title: 'Time'
      },
      vAxis: {
        title: 'Popularity'
      }
    }
    this.gauge_data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ]);

    this.gauge_options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    this.render = this.render.bind(this)
  }

  render () {
    return (
      <div className="dashboard">
        <h3>Google Chart</h3>
        <LineChart graphName="line-chart" data={this.data} options={this.options}/>
        <GaugeChart graphName="gauge-chart" data={this.gauge_data} options={this.gauge_options}/>
      </div>
    )
  }
}

function init() {
  ReactDOM.render(
    <Dashboard />, document.getElementById('dashboard')
    )
  }

import './linechart.scss'
import React, { PropTypes } from 'react'

export default class LineChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = { graphName: '', data: {} }
    this.options = {
      colors: ['#81D4FA'],
      backgroundColor: { fill: 'transparent' },
      lineWidth: 4,
      hAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        baselineColor: 'transparent',
        gridlineColor: 'transparent',
      },
      vAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        baselineColor: 'transparent',
        gridlineColor: 'transparent',
      },
      legend: {
        position: 'none'
      },
      width: 400,
      height: 250
    }
    this.drawChart = this.drawChart.bind(this)
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const chart = new google.visualization.LineChart(document.getElementById(this.props.graphName))
    chart.draw(this.props.data, this.options)
  }

  render() {
    return (
      <section className="line-chart">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col mdl-cell-title">
            <p>{this.props.graphName}</p>
          </div>
          <section id={this.props.graphName} className="mdl-cell mdl-cell--10-col">
          </section>
          <section className="mdl-cell mdl-cell--2-col mdl-cell--middle">
            <h3 className="mdl-color-text--accent">
              {this.props.data.getFormattedValue(this.props.data.getNumberOfRows() - 1, this.props.data.getNumberOfColumns() - 1) }
            </h3>
          </section>
        </div>
      </section>
    )
  }
}

LineChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

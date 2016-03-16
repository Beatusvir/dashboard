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
      <div className="col-md-4">
        <section className= "line-chart">
            <div className="col-md-12 col-title">
              <p>{this.props.graphName}</p>
            </div>
            <div className="col-graph">
              <div id={this.props.graphName} className="col-md-10">
              </div>
              <div className="graph-value">
                <div className="col-md-2">
                  <h3 className="">
                    {this.props.data.getFormattedValue(this.props.data.getNumberOfRows() - 1, this.props.data.getNumberOfColumns() - 1) }
                  </h3>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

LineChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

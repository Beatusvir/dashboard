import './donutchart.scss'
import React, { PropTypes } from 'react'

export default class DonutChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = { graphName: '', data: {} }
    this.options = {
      colors: ['#81D4FA', '#EF9A9A'],
      backgroundColor: { fill: 'transparent' },
      pieHole: 0.5,
      pieSliceTextStyle: {
        color: 'black',
      },
      legend: 'none',
      pieSliceBorderColor: { fill: 'transparent' },
      pieSliceText: 'none',
      width: 400,
      height: 250
    }

    this.drawChart = this.drawChart.bind(this)
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const chart = new google.visualization.PieChart(document.getElementById(this.props.graphName))
    chart.draw(this.props.data, this.options)
  }

  render() {
    return (
      <div className="col-md-4">
        <section className= "donut-chart">
            <div className="col-md-12 col-title">
              <p>{this.props.graphName}</p>
            </div>
            <div className="col-graph">
              <div id={this.props.graphName} className="col-md-10">
              </div>
              <div className="graph-value">
                <div className="col-md-2">
                  <h3 className="">
                    {this.props.data.getFormattedValue(1, 1) }
                  </h3>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

DonutChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

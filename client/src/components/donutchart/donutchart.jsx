import './donutchart.scss'
import React, { PropTypes } from 'react'

export default class DonutChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = { graphName: '', data: {} }
    this.options = {
      colors: ['#9FA8DA', '#F48FB1'],
      backgroundColor: { fill: 'transparent' },
      pieHole: 0.5,
      pieSliceTextStyle: {
        color: 'black',
      },
      legend: 'none',
      pieSliceBorderColor: { fill: 'transparent' },
      pieSliceText: 'none',
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
      <section className="line-chart">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col mdl-cell-title">
            <p>{this.props.graphName}</p>
          </div>
          <section id={this.props.graphName} className="mdl-cell mdl-cell--10-col">
          </section>
          <section className="mdl-cell mdl-cell--2-col mdl-cell--middle">
            <h3 className="mdl-color-text--accent">
              {this.props.data.getFormattedValue(1, 1) }
            </h3>
          </section>
        </div>
      </section>
    )
  }
}

DonutChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

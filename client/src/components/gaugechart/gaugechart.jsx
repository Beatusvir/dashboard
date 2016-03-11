import './gaugechart.scss'
import React, { PropTypes } from 'react'

export default class GaugeChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = { graphName: '', data: {}, options: {} }
    this.drawChart = this.drawChart.bind(this)
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const chart = new google.visualization.Gauge(document.getElementById(this.props.graphName))
    chart.draw(this.props.data, this.props.options)
  }

  render() {
    return (
      <section className="gauge-chart" id={this.props.graphName}>

      </section>
    )
  }

}

GaugeChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object
}

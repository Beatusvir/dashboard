import './linechart.scss'
import React, { PropTypes } from 'react'

export default class LineChart extends React.Component {

  constructor (props) {
    super(props)
    this.state = { graphName: '', data: {}, options: {} }
    this.drawChart = this.drawChart.bind(this)
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    var chart = new google.visualization.LineChart(document.getElementById(this.props.graphName))
    chart.draw(this.props.data, this.props.options)
  }

  render() {
    return (
      <div className="line-chart" id={this.props.graphName}>

      </div>
    )
  }

}

LineChart.propTypes = {
  graphName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object
}

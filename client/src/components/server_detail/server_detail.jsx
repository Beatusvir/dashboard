import './server_detail.scss'
import React, {PropTypes, Component } from 'react'
import LineChart from '../linechart/linechart'
import GaugeChart from '../gaugechart/gaugechart'
import DonutChart from '../donutchart/donutchart'

export default class ServerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true, data: null }
    this.updateData = this.updateData.bind(this)
    this.closeDetail = this.closeDetail.bind(this)
    this.gauge_data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ]);

    this.gauge_options = {
      width: 500, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom: 75, yellowTo: 90,
      minorTicks: 5
    };

    this.donutChartData = google.visualization.arrayToDataTable([
      ['Disc', 'Porcentage'],
      ['Used', 125],
      ['Free', 27],
    ])
  }

  componentWillMount() {
    this.updateData()
  }

  componentDidMount() {
    //setInterval(this.updateDate(), 5000)
    var dialog = document.querySelector('dialog')
    dialog.showModal()
  }

  updateData() {
    // TODO Get data from server api
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Some Data');

    data.addRows([
      [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9]
    ]);

    this.setState({ data: data, graphName: 'Orders' })
  }

  closeDetail() {
    this.props.closeDialog()
  }

  render() {
    return (
      <section className="server-detail">
        <dialog className="mdl-dialog" refs="dialog">
          <div className="mdl-dialog__content">
            <LineChart graphName={this.state.graphName} data={this.state.data}/>
            <DonutChart graphName={this.state.graphName} data={this.donutChartData}/>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button" onClick={this.closeDetail}>Close</button>
          </div>
        </dialog>
      </section>
    )
  }
}

ServerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired
}

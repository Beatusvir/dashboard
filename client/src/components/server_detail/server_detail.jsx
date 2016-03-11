import './server_detail.scss'
import React, {PropTypes, Component } from 'react'
import LineChart from '../linechart/linechart'
import GaugeChart from '../gaugechart/gaugechart'

export default class ServerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
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
  }

  componentDidMount() {
    var dialog = document.querySelector('dialog')
    dialog.showModal()
  }

  closeDetail(){
    this.props.closeDialog()
  }

  render() {
    return (
      <section className="server-detail">
        <dialog className="mdl-dialog" refs="dialog">
          <h4 className="mdl-dialog__title">{this.props.name}</h4>
          <div className="mdl-dialog__content">
            <GaugeChart graphName="gauge-chart" data={this.gauge_data} options={null}/>
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

import './dashboard.scss'
import React, {PropTypes, Component} from 'react'
import LineChart from '../linechart/linechart'
import DonutChart from '../donutchart/donutchart'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { lineData: {}, donutData: {}, lineGraphName: '', donutGraphName: '' }
    this.updateData = this.updateData.bind(this)
    this.close = this.close.bind(this)
  }

  updateData() {
    // TODO Get data from server api
    var lineData = new google.visualization.DataTable();
    lineData.addColumn('number', 'X');
    lineData.addColumn('number', 'Some Data');
    lineData.addRows([
      [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9]
    ]);
    var donutData = new google.visualization.arrayToDataTable([
      ['Disc', 'Porcentage'],
      ['Used', 125],
      ['Free', 27],
    ])

    this.setState({ lineData: lineData, donutData: donutData, lineGraphName: 'Orders', donutGraphName: 'HDD' })
  }

  close(){
    this.props.closeDashboard()
  }

  componentWillMount() {
    this.updateData()
  }

  render() {
    return (
      <section className="dashboard">
        <div className="fab-back">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={this.close}>
            <i className="material-icons">exit_to_app</i>
          </button>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--col-4"><LineChart graphName={this.state.lineGraphName} data={this.state.lineData}/></div>
          <div className="mdl-cell mdl-cell--col-4"><DonutChart graphName={this.state.donutGraphName} data={this.state.donutData}/></div>
          <div className="mdl-cell mdl-cell--col-4"><LineChart graphName='Line 2' data={this.state.lineData}/></div>
          <div className="mdl-cell mdl-cell--col-4"><DonutChart graphName='Donu 2' data={this.state.donutData}/></div>
          <div className="mdl-cell mdl-cell--col-4"><LineChart graphName='Line 4' data={this.state.lineData}/></div>
          <div className="mdl-cell mdl-cell--col-4"><DonutChart graphName='Donu 3' data={this.state.donutData}/></div>
        </div>
      </section>
    )
  }
}

Dashboard.propTypes = {
  closeDashboard: PropTypes.func.isRequired
}

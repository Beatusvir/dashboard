import './serverlist.scss'
import React, {Component, PropTypes} from 'react'
import Server from '../server/server'
import Dashboard from '../dashboard/dashboard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ServerList extends Component {
  constructor(props) {
    super(props)
    this.state = { dashboardVisible: false }
    this.toggleDashboard = this.toggleDashboard.bind(this)
  }

  toggleDashboard() {
    this.setState({ dashboardVisible: !this.state.dashboardVisible })
  }

  render() {
    var serverNode = this.props.data.map((server) => {
      return (
        <Server name={server.name} ip={server.ip} status={server.status} detail={server.detail} key={server.ip} toggleDashboard={this.toggleDashboard}/>
      )
    })

    return (
      <div>
        {
          this.state.dashboardVisible ? <Dashboard closeDashboard={this.toggleDashboard}/>
            : (<div className="server-list">
              <div className="row">
                <div className="col-md-12">
                  <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    { serverNode }
                  </ReactCSSTransitionGroup>
                </div>
              </div>
              <div className="bottom-right">
                <button className="btn btn-danger">
                  <i className="glyphicon glyphicon-plus"></i>
                </button>
              </div>
            </div>
            )
        }
      </div>

    )
  }
}

ServerList.propTypes = {
  data: PropTypes.array.isRequired
}

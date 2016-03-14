import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import ServerList from '../server_list/serverlist'
import Dashboard from '../dashboard/dashboard'

// Load google chart packages
google.charts.load('current', { packages: ['corechart', 'gauge'] })
// Set up callback to draw char afetr loading packages
google.charts.setOnLoadCallback(init)

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { servers: [], showDashboard: false }
    this.getServers = this.getServers.bind(this)
    this.toggleDashboard = this.toggleDashboard.bind(this)
  }
  getServers() {
    //TODO: Get server list from server api
    const serverList = [
      { name: 'Test 1', ip: '10.1.2.12', status: true, detail: '' },
      { name: 'Test 2', ip: '10.1.2.13', status: false, detail: 'Detail information' },
      { name: 'Test 3', ip: '10.1.2.14', status: true, detail: '' },
      { name: 'Test 4', ip: '10.1.2.15', status: true, detail: '' },
      { name: 'Test 5', ip: '10.1.2.16', status: false, detail: 'Detail information' },
      { name: 'Test 6', ip: '10.1.2.17', status: false, detail: 'Detail information' },
      { name: 'Test 7', ip: '10.1.2.18', status: true, detail: '' },
    ]
    this.setState({ servers: serverList })
  }

  toggleDashboard(e) {
    e.preventDefault()
    this.setState({ showDashboard: !this.state.showDashboard })
    console.log(this.state.showDashboard)
  }

  componentDidMount() {
    this.getServers()
    //setInterval(this.getServers.bind(this), this.props.pollInterval)
  }

  showIndex(){
    return (
      <div className="mdl-layout mdl-js-layout">
              <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">Server Monitor</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link" href="" onClick={this.toggleDashboard}>Dashboard</a>
                  </nav>
                </div>
              </header>
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Server Monitor</span>
                <nav className="mdl-navigation">
                  <a className="mdl-navigation__link" href="">Dashboard</a>
                </nav>
              </div>
              <main className="mdl-layout__content">
                <div className="page-content">
                  <section className="dashboard-content">
                    <ServerList data={this.state.servers}/>
                    <div className="fab">
                      <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                        <i className="material-icons">add</i>
                      </button>
                    </div>
                  </section>
                </div>
              </main>
            </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.showDashboard
            ? <Dashboard/>
            : this.showIndex()
        }
      </div>
    )
  }
}

function init() {
  ReactDOM.render(
    <Index pollInterval={10000}/>, document.getElementById('dashboard')
  )
}

import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import ServerList from '../server_list/serverlist'

// Load google chart packages
google.charts.load('current', { packages: ['corechart', 'gauge'] })
// Set up callback to draw char afetr loading packages
google.charts.setOnLoadCallback(init)

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { servers: [] }
    this.getServers = this.getServers.bind(this)
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

  componentDidMount() {
    this.getServers()
    //setInterval(this.getServers.bind(this), this.props.pollInterval)
  }


  render() {
    return (
      <section className="dashboard-content" >
        <ServerList data={this.state.servers}/>
        <div className="fab">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>
      </section>)
  }
}

function init() {
  ReactDOM.render(
    <Dashboard pollInterval={10000}/>, document.getElementById('dashboard')
  )
}

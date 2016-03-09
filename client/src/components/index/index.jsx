import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Server from '../server/server'

// Load google chart packages
google.charts.load('current', { packages: ['corechart', 'gauge'] })
// Set up callback to draw char afetr loading packages
google.charts.setOnLoadCallback(init)

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-content" >
        <div className="mdl-grid">
          <Server name="Test 1" ip="10.1.2.12" status />
          <Server name="Test 2" ip="10.1.2.16" status />
          <Server name="Test 3" ip="10.1.2.18" status={false} />
          <Server name="Test 4" ip="10.1.2.20" status />
          <Server name="Test 5" ip="10.1.2.22" status={false} />
          <Server name="Test 6" ip="10.1.2.27" status={false} />
        </div>
        <div className="fab">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>)
  }
}

function init() {
  ReactDOM.render(
    <Dashboard />, document.getElementById('dashboard')
  )
}

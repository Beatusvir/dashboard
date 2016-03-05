import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Histogram from './components/histogram'

const Dashboard = React.createClass({
  render () {
    return (
      <div className="dashboard">
        <Histogram />
      </div>
    )
  }
})

ReactDOM.render(
  <Dashboard />, document.getElementById('dashboard')
)

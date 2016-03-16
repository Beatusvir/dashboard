import './server.scss'
import React, { Component, PropTypes } from 'react'
import ServerDetail from '../server_detail/server_detail';

export default class Server extends Component {
  constructor(props) {
    super(props)
    this.state = { detailVisible: false }
    this.toggleDetail = this.toggleDetail.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    if (this.props.status) {
      this.class = 'img-rounded server-ok'
    } else {
      this.class = 'img-rounded server-error'
    }
  }

  toggleDetail() {
    this.setState({ detailVisible: !this.state.detailVisible })
  }

  handleClick(e) {
    e.preventDefault()
    if (e.target.nodeName === 'IMG') {
      this.props.toggleDashboard()
    } else if (e.target.nodeName === 'A') {
      this.toggleDetail()
    }
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 server">
        <div className="thumbnail" onClick={this.handleClick}>
          <img src="" alt="" className={this.class}/>
          <div className="caption text-center">
            <h3>{this.props.name}</h3>
          </div>
          <p>{this.props.ip}</p>
          <p>{this.props.detail}</p>
          <p>
            <a className="btn btn-default" data-toggle="modal" data-target="#modalDetail">View Updates</a>
          </p>
        </div>
        <ServerDetail name={this.props.name} />
      </div>
    )
  }
}

Server.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  detail: PropTypes.string,
  toggleDashboard: PropTypes.func.isRequired
}

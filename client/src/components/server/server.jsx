import './server.scss'
import React, { Component, PropTypes } from 'react'
import ServerDetail from '../server_detail/server_detail';

export default class Server extends Component {
  constructor(props) {
    super(props)
    this.state = { detailVisible: false }
    this.toggleDetail = this.toggleDetail.bind(this)
  }
  componentWillMount() {
    if (this.props.status) {
      this.class = 'server-card-square mdl-card mdl-shadow--2dp server-ok'
    } else {
      this.class = 'server-card-square mdl-card mdl-shadow--2dp server-error'
    }
  }

  toggleDetail() {
    //console.log(this)
    this.setState({ detailVisible: !this.state.detailVisible })
  }

  render() {
    return (
      <li>
        <section className={this.class} id={this.props.name}>
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">{this.props.name}</h2>
            <div className="mdl-layout-spacer"></div>
            <p className="mdl-card__subtitle-text">{this.props.ip}</p>
          </div>
          {
            this.props.detail.length > 0
              ? (<div className="mdl-card__supporting-text">{this.props.detail}</div>)
              : null
          }
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.toggleDetail}>
              View Updates
            </a>
          </div>
        </section>
        {
          this.state.detailVisible ? (
            <ServerDetail name={this.props.name} closeDialog={this.toggleDetail}/>
          ) : null
        }
      </li>
    )
  }
}

Server.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  detail: PropTypes.string
}

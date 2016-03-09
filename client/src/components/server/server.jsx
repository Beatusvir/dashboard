import './server.scss'
import React, {Component, PropTypes } from 'react'

// TODO: Test todo
export default class Server extends Component{
  constructor(props){
    super(props)
    this.state = { name: '', ip: '', status: false}
    this.style = {
      float: 'left',
      margin: '20px'
    }
  }
  componentWillMount() {
    if(this.props.status){
      this.class = 'server-card-square mdl-card mdl-shadow--2dp server-ok'
    }else {
      this.class = 'server-card-square mdl-card mdl-shadow--2dp server-error'
    }
  }
  render(){
    return(
      <div className="mdl-cell mdl-cell--3-col">
          <div className={this.class} id="{this.props.name}">
            <div className="mdl-card__title mdl-card--expand">
              <div className="mdl-layout-spacer"></div>
              <h2 className="mdl-card__title-text">{this.props.name}</h2>
            </div>
            <div className="mdl-card__supporting-text">
              {this.props.ip}
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Updates
              </a>
            </div>
          </div>
      </div>
    )
  }
}

Server.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

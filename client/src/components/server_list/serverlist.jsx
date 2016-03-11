import React, {Component, PropTypes} from 'react'
import Server from '../server/server'

export default class ServerList extends Component {
  render() {
    var serverNode = this.props.data.map((server) => {
      return (
        <Server name={server.name} ip={server.ip} status={server.status} detail={server.detail} key={server.ip}/>
      )
    })
    return (
      <section className="mdl-grid">
        {serverNode}
      </section>
    )
  }
}

ServerList.propTypes = {
  data: PropTypes.array.isRequired
}

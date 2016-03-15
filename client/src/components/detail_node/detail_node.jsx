import React, {PropTypes, Component } from 'react'

export default class DetailNode extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <tr>
        <td>{this.props.updated}</td>
        <td>{this.props.status ? 'Ok' : 'Error'}</td>
        <td>{this.props.detail}</td>
      </tr>
    )
  }
}

DetailNode.propTypes = {
  updated: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  detail: PropTypes.string
}

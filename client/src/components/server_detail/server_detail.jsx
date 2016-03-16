import './server_detail.scss'
import React, {PropTypes, Component } from 'react'
import DetailNode from '../detail_node/detail_node'

export default class ServerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true, updates: null }
    this.updateData = this.updateData.bind(this)
  }

  componentWillMount() {
    this.updateData()
  }

  componentDidMount() {
    //setInterval(this.updateDate(), 5000)
  }

  updateData() {
    // TODO Get data from server api
    var updates = [
      { updated: this.convertDate(new Date()), status: true, detail: 'Short description', key: 1 },
      { updated: this.convertDate(new Date()), status: true, detail: 'Short description', key: 2 },
      { updated: this.convertDate(new Date()), status: false, detail: 'Short error description', key: 3 },
      { updated: this.convertDate(new Date()), status: true, detail: 'Short description', key: 4 },
    ]
    this.setState({ updates: updates })
  }

  convertDate(date) {
    var month = +date.getDate() + 1
    var day = date.getDay()
    var year = date.getFullYear()

    var result = day + '-' + month + '-' + year
    return result
  }

  render() {
    const detailNodes = this.state.updates.map((update, i) => {
      return (
        <DetailNode updated={update.updated} detail={update.detail} status={update.status} key={update.key} rowStyle={update.status ? 'success' : 'danger'}/>
      )
    })
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="modalDetail">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
              <h4 className="modal-title">Updates</h4>
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th  className="text-center">Date</th>
                    <th  className="text-center">Status</th>
                    <th  className="text-center">Detail</th>
                  </tr>
                </thead>
                <tbody>
                    {detailNodes}
              </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ServerDetail.propTypes = {
  name: PropTypes.string.isRequired
}

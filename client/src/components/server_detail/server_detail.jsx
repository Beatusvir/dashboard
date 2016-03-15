import './server_detail.scss'
import React, {PropTypes, Component } from 'react'
import DetailNode from '../detail_node/detail_node'

export default class ServerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true, updates: null }
    this.updateData = this.updateData.bind(this)
    this.closeDetail = this.closeDetail.bind(this)
  }

  componentWillMount() {
    this.updateData()
  }

  componentDidMount() {
    //setInterval(this.updateDate(), 5000)
    var dialog = document.querySelector('dialog')
    dialog.showModal()
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

  closeDetail() {
    this.props.closeDialog()
  }

  render() {
    const detailNodes = this.state.updates.map((update, i) => {
      return (
        <DetailNode updated={update.updated} detail={update.detail} status={update.status} key={update.key}/>
      )
    })
    return (
      <section className="server-detail">
        <dialog className="mdl-dialog" refs="dialog">
          <div className="mdl-dialog__content">
            <div className="mdl-grid">
              <div className="mdl-cel mdl-cel--col-12">
                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp full-width">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                      <th className="full-width">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailNodes}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button" onClick={this.closeDetail}>Close</button>
          </div>
        </dialog>
      </section>
    )
  }
}

ServerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired
}

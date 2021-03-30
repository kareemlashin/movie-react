import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Loading extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='LoadingWrapper'>
        {this.props.loadingPage ?(

          <div className='loading'>
          <div id='container'>
            <div id='loader'></div>
          </div>

        </div>) : ''}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadingPage: state.reducers.loadingPage
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

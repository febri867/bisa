import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapState'
import {
    changeXValueSum,
    changeYValueSum
} from '../store/action'

class  App extends Component {
    render() {
        const {
            result_sum,
            changeYValueSum,
            changeXValueSum
        } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Sum X and Y</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Input X</label>
                            <input placeholder="0" type="number" onChange={(e) => changeXValueSum(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Input Y</label>
                            <input placeholder="0" type="number" onChange={(e) => changeYValueSum(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Result</label>
                            <input placeholder="0" disabled={true} value={result_sum} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = mapStateToProps('app', ['result_sum']);
const mapActions = { changeXValueSum, changeYValueSum};

export default connect(mapState, mapActions)(App)
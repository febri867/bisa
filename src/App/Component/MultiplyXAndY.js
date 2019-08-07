import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapState'
import {
    changeXValueMultiply, changeYValueMultiply
} from '../store/action'

class  App extends Component {
    render() {
        const {
            result_multiply,
            changeYValueMultiply,
            changeXValueMultiply
        } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Multiply X and Y</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Input X</label>
                            <input placeholder="0" type="number" onChange={(e) => changeXValueMultiply(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Input Y</label>
                            <input placeholder="0" type="number" onChange={(e) => changeYValueMultiply(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label>Result</label>
                            <input disabled={true} value={result_multiply} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = mapStateToProps('app', [ 'result_multiply' ]);
const mapActions = { changeXValueMultiply, changeYValueMultiply };

export default connect(mapState, mapActions)(App)
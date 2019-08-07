import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapState'
import {
    changeTotalFibonacci
} from '../store/action'
import {fibonacci} from "../utils/fibonacci";

class  App extends Component {
    render() {
        const {
            changeTotalFibonacci,
            total_fibonacci
        } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Fibonacci</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Total Fibonacci</label>
                            <input placeholder="0" type="number" onChange={(e) => changeTotalFibonacci(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-8">
                            <label>Result</label>
                            <input placeholder="0" disabled={true} value={fibonacci(total_fibonacci)} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = mapStateToProps('app', [ 'total_fibonacci' ]);
const mapActions = { changeTotalFibonacci };

export default connect(mapState, mapActions)(App)
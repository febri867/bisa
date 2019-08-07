import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapState'
import {
    changeTotalPrimeNumber
} from '../store/action'
import {primeNumber} from "../utils/primeNumber";

class  App extends Component {
    render() {
        const {
            changeTotalPrimeNumber,
            total_prime_number
        } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Prime Number</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Total Prime Number</label>
                            <input placeholder="0" type="number" onChange={(e) => changeTotalPrimeNumber(e.target.value)} className="form-control"/>
                        </div>
                        <div className="col-md-8">
                            <label>Result</label>
                            <input placeholder="0" disabled={true} value={primeNumber(total_prime_number)} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = mapStateToProps('app', [ 'total_prime_number' ]);
const mapActions = { changeTotalPrimeNumber };

export default connect(mapState, mapActions)(App)
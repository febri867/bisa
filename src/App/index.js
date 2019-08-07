import React, { Component } from 'react'
import SumXAndY from "./Component/SumXAndY";
import MultiplyXAndY from "./Component/MultiplyXAndY"
import TotalPrimeNumber from "./Component/TotalPrimeNumber"
import TotalFibonacci from "./Component/TotalFibonacci"

class  App extends Component {
    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                                <SumXAndY/>
                                <br/>
                                <MultiplyXAndY/>
                                <br/>
                                <TotalPrimeNumber/>
                                <br/>
                                <TotalFibonacci/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
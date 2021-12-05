import React, { Component } from 'react'

class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    
    render() {
        let {value,eqn}=this.props;
        return (
            <div id="result">
                <p>{eqn}</p>
                <p>{value}</p>
            </div>
        )
    }
}

export default ResultBar

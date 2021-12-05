import React, { Component } from 'react'
import KeyRows from './KeyRows'
export class KeyBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: [['%', 'CE', 'C', 'del'], ['1/x', 'x^2', 'sqrt(x)', '/'], ['7', '8', '9', '*'], ['6', '5', '4', '-'], ['1', '2', '3', '+'], ['+/-', '0', '.', '=']]
        }
    }

    render() {
        let values = this.state.values
        return (
            
                <table>
                    <tbody>
                    {
                        values.map((x,i) => { return <KeyRows key={i} values={x} /> })
                    }
                    </tbody>
                </table>
            // </div>
        )
    }
}

export default KeyBox

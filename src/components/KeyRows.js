import React, { Component } from 'react'

class KeyRows extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    

    render() {
        let values = this.props.values;
        return (
            <>
                <tr>
                    {
                        values.map((x,i) => {
                            return (
                            <td key={i} className={`cells`}>
                                <button>
                                    {x}
                                </button>
                            </td>
                            )
                        })
                    }
                </tr>
            </>
        )
    }
}

export default KeyRows

import React from "react";

export default class ErrorContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            haserror: false
        }
        this.getError = this.getError.bind(this)
    }

    getError() {
        this.setState({
            haserror: true
        })
    }
    render() {

        if (this.state.haserror) {
            throw new Error("the error is occurred inside the component")
        }
        return (
            <>
                <button onClick={this.getError}>getError</button>
            </>
        )
    }
}
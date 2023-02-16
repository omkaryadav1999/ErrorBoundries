import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div style={{ backgroundColor: "red", padding: "40px" }}>
                    <h2>Somthing went wrong</h2>
                    <p>{this.state.error.toString()}</p>
                </div>
            )
        }

        return (
            this.props.children
        )
    }
}

import React from "react"
import ErrorBoundary from "./ErrorBoundries"
import ErrorContent from "./ErrorContent"

// what is the error boundaries: the error boundaries the react component it used for to catch the javascript error anywhere in the child component.log thos error and dispaly the fallback ui insted of the component tree that chrased.the error Boundries catch the error during the reranding the life cycle method.

export default class App extends React.Component {

    render() {

        return (
            <>
                <h1>dispaly the error boundries</h1>
                <ErrorBoundary>
                    <ErrorContent />
                </ErrorBoundary>
            </>
        )
    }
}
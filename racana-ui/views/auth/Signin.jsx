import {render} from "react-dom"

const React = require('react')

export class Signin extends React.Component {
    render() {
        return (
            <div>
                <h3>The Sign in Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button className="btn btn-primary">Go Home!</button>
            </div>
        )
    }
}

module.exports = Signin
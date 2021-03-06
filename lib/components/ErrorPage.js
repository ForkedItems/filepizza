import Centered from './Centered'
import ErrorStore from '../stores/ErrorStore'
import React from 'react'
import Spinner from './Spinner'

export default class ErrorPage extends React.Component {

  constructor() {
    this.state = ErrorStore.getState()

    this._onChange = () => {
      this.setState(ErrorStore.getState())
    }
  }

  componentDidMount() {
    ErrorStore.listen(this._onChange)
  }

  componentDidUnmount() {
    ErrorStore.unlisten(this._onChange)
  }

  render() {
    return <Centered ver>

      <Spinner dir="up" />

      <h1 className="with-subtitle">FilePizza</h1>
      <p className="subtitle">
        <strong>{this.state.status}:</strong> {this.state.message}
      </p>

      {this.state.stack
        ? <pre>{this.state.stack}</pre>
        : null}

    </Centered>
  }

}

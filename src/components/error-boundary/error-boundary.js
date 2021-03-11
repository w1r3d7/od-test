import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends Component {
  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const {children} = this.props;
    const {error} = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    return (children)
  }
}

export default ErrorBoundary;

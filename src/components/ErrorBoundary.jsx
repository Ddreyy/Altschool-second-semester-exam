import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className='flex justify-center items-center'>
                <h1 className='text-3xl font-bold font-sora uppercase'>Something went wrong.</h1>
            </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

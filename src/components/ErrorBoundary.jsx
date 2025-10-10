import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-3xl font-bold">Something went wrong.</h1>
          <p>Please refresh or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

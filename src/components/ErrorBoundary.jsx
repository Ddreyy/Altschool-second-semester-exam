import React from "react";
import { Link } from "react-router-dom";
import animationData from "../components/animate/error.json"
import Lottie from "lottie-react"

const ErrorContext = React.createContext();

class ErrorBoundary extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error);
    console.error('Error boundary error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContext.Provider value={this.state.error}>
          <div className='flex flex-col justify-center items-center h-screen bg-black'>
          <Lottie animationData={animationData} className='w-32 h-auto'/>
            <h1 className='text-lg md:text-2xl lg:text-3xl text-center text-[#FF0000] font-bold font-sora uppercase'>
              Something went wrong, Try again later.
            </h1>
            <Link to="/">
              <button className="bg-[#E1D9D1] hover:bg-[#676767] hover:text-white text-black transition-transform duration-400 ease-in-out transform hover:scale-105 font-bold font-sora py-2 px-4 mt-16 rounded">
                Back to Home
              </button>
            </Link>
          </div>
      </ErrorContext.Provider>      
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary, ErrorContext };

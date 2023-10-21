import React, { useContext, useEffect } from "react";
import { ErrorContext } from './ErrorBoundary'


const TestPage = () => {
    const error = useContext(ErrorContext);
    console.log('Error in TestPage:', error);
  
    useEffect(() => {
      throw new Error("This is a test error inside TestPage component.");
    }, []); 
  


  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-black font-sora uppercase'>
        Test Page
      </h1>
      {error && (
        <div className="mt-4 text-red-500">
          Error occurred: {error.message}
        </div>
      )}
    </div>
  );
};

export default TestPage;

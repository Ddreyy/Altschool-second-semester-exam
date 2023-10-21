import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoData from './components/RepoData';
import { ErrorBoundary, ErrorContext} from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';
import AllRepositories from './components/AllRepositories';
import TestPage from './components/TestPage';
import Navbar from './components/Navbar';

function App() {


  return (
    <Router>
       <ErrorBoundary>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<AllRepositories />} />
            <Route path="/test" element={<ErrorBoundary><TestPage /></ErrorBoundary>} />
            <Route path="/repositories/:repoName" element={<RepoData />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>

  );
};

export default App

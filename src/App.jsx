import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoData from './components/RepoData';
import RepoList from './components/RepoLists';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';

function App() {

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/"  element={<RepoList />} />
          <Route path="/repositories" element={<RepoList />} />
          <Route path="/repositories/:repoName" element={<RepoData />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>  
    </Router>
  );
};

export default App

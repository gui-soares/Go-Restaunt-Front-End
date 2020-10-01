import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes/index.routes';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes/>
      </Router>
    </AppProvider>
  );
}

export default App;

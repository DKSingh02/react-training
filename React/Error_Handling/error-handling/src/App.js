import React from 'react';
import './App.css';
import Hero from './Hero/Hero'
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName={'Diwakar'}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Amit'}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Joker'}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;

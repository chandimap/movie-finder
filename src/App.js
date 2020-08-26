import React from 'react';
import Navigation from './layouts/Navigation';
import Router from './Router'

const App = () => {
    return (
      <React.Fragment>
        <Navigation/>
        <Router/>
      </React.Fragment>
    );
}

export default App;
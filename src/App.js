import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';

import Navbar from './Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <MathJaxContext>
      <Navbar />
      <AllRoutes />

    </MathJaxContext>
  );
}

export default App;

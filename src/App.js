import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';
import GlobalStyles from './components/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={'Loading...'}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

import React from 'react';
import Navigation from './navigation';

const Layout = ({ content = () => null }) => (
  <div>
    <header>
      <h1>Library</h1>
      <Navigation />
    </header>

    <div>
      {content()}
    </div>
  </div>
);

export default Layout;

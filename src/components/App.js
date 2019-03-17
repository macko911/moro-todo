import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'
import TodoApp from './TodoApp'

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <TodoApp />

        <Footer />
      </>
    );
  }
}

export default App;

import React from 'react';
import Footer from './Component/Footer';
import Main from './Component/Main';
import Header from './Component/Header';

class App extends React.Component {

  render() {
    return (
      <div>

        <Main />
        <Footer />
        <Header />
      </div>
    )
  }
}

export default App;

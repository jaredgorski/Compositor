var React = require('react');
import Compositor from './Compositor.js';
import Footer from './Footer.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <Compositor />
        <Footer />
      </div>
    );
  }
}

export default App;

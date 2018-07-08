var React = require('react');
import './typography.scss';
import Compositor from '../Compositor/';
import Footer from '../Footer/';

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

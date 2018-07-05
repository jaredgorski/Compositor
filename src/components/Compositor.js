var React = require('react');

class Compositor extends React.Component {

  compositeRGBA(r1, g1, b1, a1, r2, b2, g2, a2) {
    const compositeR = Math.round(r1*a1*(1 - a2) + r2*a2);
    const compositeG = Math.round(g1*a1*(1 - a2) + g2*a2);
    const compositeB = Math.round(b1*a1*(1 - a2) + b2*a2);

    return [compositeR, compositeB, compositeG];
  }

  constructor(props) {
      super(props);
      this.state = {
        r1: '',
        g1: '',
        b1: '',
        a1: '',
        r2: '',
        g2: '',
        b2: '',
        a2: ''
      };

      this.handleFormChange = this.handleFormChange.bind(this);
    }

  handleFormChange(event) {
    const target = event.target;
    const value = target.type !== 'number' ? 0 : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.compositeRGBA(this.state.r1, this.state.g1, this.state.b1, this.state.a1, this.state.r2, this.state.g2, this.state.b2, this.state.a2);
    console.log(this.compositeRGBA(this.state.r1, this.state.g1, this.state.b1, this.state.a1, this.state.r2, this.state.g2, this.state.b2, this.state.a2));
  }

  render () {
    return (
      <div>
        <h1>Compositor</h1>
        <form id="baseColorForm" className="base-color-form">
          <input name="r1" placeholder="R" type="number" value={this.state.r1} onChange={this.handleFormChange} />
          <input name="g1" placeholder="G" type="number" value={this.state.g1} onChange={this.handleFormChange} />
          <input name="b1" placeholder="B" type="number" value={this.state.b1} onChange={this.handleFormChange} />
          <input name="a1" placeholder="A" type="number" value={this.state.a1} onChange={this.handleFormChange} />
        </form>
        <form id="overlayColorForm" className="overlay-color-form">
          <input name="r2" placeholder="R" type="number" value={this.state.r2} onChange={this.handleFormChange} />
          <input name="g2" placeholder="G" type="number" value={this.state.g2} onChange={this.handleFormChange} />
          <input name="b2" placeholder="B" type="number" value={this.state.b2} onChange={this.handleFormChange} />
          <input name="a2" placeholder="A" type="number" value={this.state.a2} onChange={this.handleFormChange} />
        </form>
      </div>
    );
  }
}

export default Compositor;

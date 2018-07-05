var React = require('react');

class Compositor extends React.Component {

  compositeRGBA(r1, g1, b1, a1, r2, b2, g2, a2) {
    const compositeR = Math.round(r1*a1*(1 - a2) + r2*a2);
    const compositeG = Math.round(g1*a1*(1 - a2) + g2*a2);
    const compositeB = Math.round(b1*a1*(1 - a2) + b2*a2);
    const compositeRGBString = `rgb(${compositeR}, ${compositeG}, ${compositeB})`;

    return compositeRGBString;
  }

  constructor(props) {
    super(props);
    this.state = {
      r1: 255,
      g1: 255,
      b1: 255,
      a1: 1,
      r2: 255,
      g2: 255,
      b2: 255,
      a2: 1
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.displayComposite();
  }

  displayComposite() {
    const compositeOutput = this.compositeRGBA(this.state.r1, this.state.g1, this.state.b1, this.state.a1, this.state.r2, this.state.g2, this.state.b2, this.state.a2);
    return compositeOutput;
  }

  render () {
    const containerColor = {
      backgroundColor: `${this.displayComposite()}`,
    };

    const cpContainerClasses = 'cp-container';

    const cpHeadingClasses = 'cp-heading';

    const formsWrapperClasses = 'cp-forms-wrapper';

    const yieldWrapperClasses = 'cp-yield-wrapper';

    const baseFormClasses = 'cp-base-form cp--inline';

    const overlayFormClasses = 'cp-overlay-form cp--inline';

    const inputClasses = 'cp-input cp--inline';

    const yieldClasses = 'cp-input cp-yield-input cp--inline';

    const formOperatorClasses = 'cp-form-operator cp--inline';

    const inputLabelClasses = 'cp-input-label cp--inline';

    return (
      <div id="composite-container" className={cpContainerClasses} style={containerColor}>
        <h1 className={cpHeadingClasses}>Compositor</h1>
        <div className={formsWrapperClasses}>
          <form id="baseColorForm" className={baseFormClasses}>
            <span className={inputLabelClasses}>rgba(</span>
            <input name="r1" className={inputClasses} placeholder="R" type="number" value={this.state.r1} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="g1" className={inputClasses} placeholder="G" type="number" value={this.state.g1} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="b1" className={inputClasses} placeholder="B" type="number" value={this.state.b1} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="a1" className={inputClasses} placeholder="A" type="number" value={this.state.a1} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>)</span>
          </form>
          <span className={formOperatorClasses}>+</span>
          <form id="overlayColorForm" className={overlayFormClasses}>
            <span className={inputLabelClasses}>rgba(</span>
            <input name="r2" className={inputClasses} placeholder="R" type="number" value={this.state.r2} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="g2" className={inputClasses} placeholder="G" type="number" value={this.state.g2} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="b2" className={inputClasses} placeholder="B" type="number" value={this.state.b2} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>,</span>
            <input name="a2" className={inputClasses} placeholder="A" type="number" value={this.state.a2} onChange={this.handleFormChange} />
            <span className={inputLabelClasses}>)</span>
          </form>
        </div>
        <div className={yieldWrapperClasses}>
          <span className={formOperatorClasses}>=</span>
          <input readOnly name="compositeOutput" className={yieldClasses} value={this.displayComposite()} />
        </div>
      </div>
    );
  }
}

export default Compositor;

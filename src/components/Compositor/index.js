var React = require('react');
import './compositor.scss';

class Compositor extends React.Component {

  compositeR(r1, a1, r2, a2) {
    const compositeR = Math.round(r1*a1*(1 - a2) + r2*a2);
    
    if (compositeR > 255) {
      return 255;
    } else {
      return compositeR;
    }
  }

  compositeG(g1, a1, g2, a2) {
    const compositeG = Math.round(g1*a1*(1 - a2) + g2*a2);
    
    if (compositeG > 255) {
      return 255;
    } else {
      return compositeG;
    }
  }

  compositeB(b1, a1, b2, a2) {
    const compositeB = Math.round(b1*a1*(1 - a2) + b2*a2);

    if (compositeB > 255) {
      return 255;
    } else {
      return compositeB;
    }
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

    this.compositeRGB();
    this.adaptTextColor();
  }

  compositeRGB() {
    const actualCompositeR = this.compositeR(this.state.r1, this.state.a1, this.state.r2, this.state.a2);
    const actualCompositeG = this.compositeR(this.state.g1, this.state.a1, this.state.g2, this.state.a2);
    const actualCompositeB = this.compositeR(this.state.b1, this.state.a1, this.state.b2, this.state.a2);
    const compositeRGBString = `rgb(${actualCompositeR}, ${actualCompositeG}, ${actualCompositeB})`;

    return compositeRGBString;
  }

  adaptTextColor() {
    const colorTotal = (this.compositeR(this.state.r1, this.state.a1, this.state.r2, this.state.a2) + this.compositeR(this.state.g1, this.state.a1, this.state.g2, this.state.a2) + this.compositeR(this.state.b1, this.state.a1, this.state.b2, this.state.a2));

    if (colorTotal < 250) {
      return '#fff';
    } else {
      return '#000';
    }
  }

  render () {
    const containerColor = {
      backgroundColor: `${this.compositeRGB()}`,
      color: `${this.adaptTextColor()}`,
    };

    const cpContainerClasses = 'cp-container';

    const cpHeadingClasses = 'cp-heading cp-typo-heading cp--bold cp--non-selectable';

    const bodyWrapperClasses = 'cp-body-wrapper';

    const formsWrapperClasses = 'cp-forms-wrapper';

    const yieldWrapperClasses = 'cp-yield-wrapper';

    const baseFormClasses = 'cp-form cp-base-form cp--inline';

    const overlayFormClasses = 'cp-form cp-overlay-form cp--inline';

    const inputClasses = 'cp-input cp-typo-body cp--inline cp--non-selectable';

    const yieldClasses = 'cp-input cp-typo-body cp-yield-input cp--inline';

    const formOperatorClasses = 'cp-form-operator cp-typo-body cp--inline cp--non-selectable';

    const inputLabelClasses = 'cp-input-label cp-typo-body cp--inline cp--non-selectable';

    return (
      <div id="composite-container" className={cpContainerClasses} style={containerColor}>
        <h1 className={cpHeadingClasses}>Compositor</h1>
        <div className={bodyWrapperClasses}>
          <div className={formsWrapperClasses}>
            <form id="baseColorForm" className={baseFormClasses}>
              <span className={inputLabelClasses}>rgba(</span>
              <input name="r1" className={inputClasses} placeholder="R" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.r1} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="g1" className={inputClasses} placeholder="G" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.g1} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="b1" className={inputClasses} placeholder="B" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.b1} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="a1" className={inputClasses} placeholder="A" type="number" min="0" max="1" maxLength="5" step="0.01" value={this.state.a1} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>)</span>
            </form>
            <span className={formOperatorClasses}>+</span>
            <form id="overlayColorForm" className={overlayFormClasses}>
              <span className={inputLabelClasses}>rgba(</span>
              <input name="r2" className={inputClasses} placeholder="R" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.r2} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="g2" className={inputClasses} placeholder="G" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.g2} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="b2" className={inputClasses} placeholder="B" type="number" min="0" max="255" maxLength="3" step="1" value={this.state.b2} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>,</span>
              <input name="a2" className={inputClasses} placeholder="A" type="number" min="0" max="1" maxLength="5" step="0.01" value={this.state.a2} onChange={this.handleFormChange} />
              <span className={inputLabelClasses}>)</span>
            </form>
          </div>
          <div className={yieldWrapperClasses}>
            <span className={formOperatorClasses}>→</span>
            <input readOnly name="compositeOutput" className={yieldClasses} value={this.compositeRGB()} maxLength="18" />
          </div>
        </div>
      </div>
    );
  }
}

export default Compositor;

import React, { Component, PropTypes } from 'react';

require('./demo.less');

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    const value = e.target.value;

    this.setState({
      value,
    });
  }

  onClick() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { value, visible } = this.state;

    return (
      <div>
        <h2 className="demo-title">Component Demo</h2>
        <button onClick={this.onClick}>control visibility</button>
        <br />
        {
          visible &&
          <input onChange={this.onChange} value={value} />
        }
      </div>
    );
  }
}

Demo.propTypes = {
  value: PropTypes.string,
};

Demo.defaultProps = {
  value: '',
};

export default Demo;

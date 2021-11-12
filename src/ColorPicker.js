'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { HuePicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: true,
    color: {
      r: '1',
      g: '1',
      b: '1',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    this.setState({backgroundColor: color.rgb})
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '100px',
          height: '14px',
          borderRadius: '20px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#06274F',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          background: '#06274F',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div className="color">
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <HuePicker color={ this.state.color } onChange={ this.handleChange} />
        </div> : null }
        <div style={{ backgroundColor: this.state.color, height:'20px', transition: 'ease all 500ms'}}></div>
      </div>
    )
  }
}

export default ColorPicker
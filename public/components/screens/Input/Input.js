import React, { Component } from 'react';
import * as styles from './Input.css';

export default class Input extends Component
{
    render()
    {
        const inputClass = this.props.hasError ? styles.error : '';
        return(<input { ...this.props } className={ inputClass } />);
    }
}

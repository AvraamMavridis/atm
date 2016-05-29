import React, { Component } from 'react';
import * as styles 				  from './Button.css';

export default class TopBar extends Component
{
	render() {
    const { label, extraClass } = this.props;

		return (
			<span onClick={ this.props.onClick.bind( this ) }
						className={ `${styles.button} ${extraClass}` }>
				{ label }
			</span>
		);
	}
}

import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles 				  from './TopBar.css';

export default class TopBar extends Component
{
	render() {
		return (
			<Col md={12} className={ styles.topbar }>
				ATM
			</Col>
		);
	}
}

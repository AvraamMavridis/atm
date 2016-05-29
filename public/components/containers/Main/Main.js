import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as style           from './Main.css';
import ATMServices          from '../../screens/ATMServices';
import TopBar               from '../../screens/TopBar';
import SlotCardManager      from '../SlotCardManager';
import { withRouter }       from 'react-router'


export class Main extends Component
{

  	render() {

  		return (
  			<Col md={ 12 } className={ `${style.main} no-padding` }>
          <TopBar />
          <Col md={ 9 } className={ `${style.slotSpace} no-padding` }>
            { this.props.children }
          </Col>
          <Col md={ 3 } className={ `${style.cartSpace} no-padding` }>
              <SlotCardManager />
          </Col>
        </Col>
  		);
  	}
}

export default withRouter( Main );

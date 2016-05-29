import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles          from './AccountActivity.css';
import Loading              from '../Loading';

export default class AccountActivity extends Component
{
    render()
    {
        console.log( this.props );
        return (<Col md={12} className={ styles.accountActivityContainer } >
                    blah blah
                </Col>);
    }
}

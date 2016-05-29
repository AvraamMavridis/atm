import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles          from './AccountActivity.css';
import Loading              from '../Loading';

export default class AccountActivity extends Component
{
    render()
    {
        const { deposits=[], withdrawals=[] } = this.props;

        return (<Col md={12} className={ styles.accountActivityContainer } >
                    <Col md={ 12 } className={ styles.results }>
                        <Col md={12}> Deposits </Col>
                          <table>
                          <tr><td>Date</td><td>Amount</td></tr>
                          {
                            deposits.map( dp => <tr><td>{ dp.date.toJSON().slice(0,10) }</td><td>{ dp.amount } €</td></tr>)
                          }
                          <tr><td></td><td></td></tr>
                          <tr><td></td><td></td></tr>
                          <tr><td></td><td></td></tr>
                          </table>
                    </Col>
                    <Col md={ 12 } className={ styles.results }>
                        <Col md={12}> Withdrawals </Col>
                          <table>
                          <tr><td>Date</td><td>Amount</td></tr>
                          {
                            withdrawals.map( wd => <tr><td>{ wd.date.toJSON().slice(0,10) }</td><td>{ wd.amount } €</td></tr>)
                          }
                          <tr><td></td><td></td></tr>
                          <tr><td></td><td></td></tr>
                          <tr><td></td><td></td></tr>
                          </table>
                    </Col>
                </Col>);
    }
}

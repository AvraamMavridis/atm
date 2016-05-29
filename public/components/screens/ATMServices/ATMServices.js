import React       from 'react';
import * as styles from './ATMServices.css';
import Col         from 'react-bootstrap/lib/Col';
import Button      from '../Button';

export default props => {

    const onClick = path => props.router.push( path );

    return (  <Col md={12} className={ styles.atmservicesContainer }>
                <Col md={6} className={ styles.services } >
                  <div className={ styles.service }>
                    <Button onClick={ onClick.bind( this, '/withdrawal' ) } label='Withdrawal'/>
                  </div>
                  <div className={ styles.service }>
                    <Button onClick={ onClick.bind( this, '/deposit' ) } label='Deposit'/>
                  </div>
                  <div className={ styles.service }>
                    <Button onClick={ onClick.bind( this, '/activity' ) } label='Account Activity'/>
                  </div>
               </Col>
           </Col> );
};

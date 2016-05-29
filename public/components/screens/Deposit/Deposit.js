import React       from 'react';
import * as styles from './ATMServices.css';
import Col         from 'react-bootstrap/lib/Col';
import Button      from '../Button';

export default props => {

    const onClick = path => props.navigate( path );

    return ( <div className={ styles.atmservicesContainer } >
                <div className={ styles.service }>
                  <Button onClick={ onClick.bind( this, '/withdrawal' ) } label='Withdrawal'/>
                </div>
                <div className={ styles.service }>
                  <Button onClick={ onClick.bind( this, '/deposit' ) } label='Deposit'/>
                </div>
                <div className={ styles.service }>
                  <Button onClick={ onClick.bind( this, '/changepin' ) } label='Change Pin'/>
                </div>
                <div className={ styles.service }>
                  <Button onClick={ onClick.bind( this, '/activity' ) } label='Account Activity'/>
                </div>
             </div> );
};

import React       from 'react';
import * as styles from './Welcome.css';
import Col         from 'react-bootstrap/lib/Col';

export default ( ) => {
    return ( <div className={ styles.welcomeContainer } >
                <div className={ styles.welcomeMsg }>Welcome</div>
                <div className={ styles.insertCartMsg}>Please insert your cart</div>
             </div> );
};

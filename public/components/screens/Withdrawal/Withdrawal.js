import React, { Component }   from 'react';
import Col                    from 'react-bootstrap/lib/Col';
import Button                 from '../Button';
import Input                  from '../Input';
import { WITHDRAWAL_OPTIONS } from '../../../constants';
import * as styles            from './Withdrawal.css';


export default class Withdrawal extends Component
{
    constructor()
    {
        super();
        this.state = {};
    }

    render()
    {
      const { props } = this;

      return ( <Col md={12} className={ styles.withdrawalContainer }>
                <Col md={12} className={ styles.label } >Select an amount</Col>
                <Col md={4} className={ styles.optionsContainer }>
                  { WITHDRAWAL_OPTIONS.map( opt => <Button onClick={ () => props.withdraw( opt ) }
                                                           key={opt}
                                                           label={opt}
                                                           extraClass={ styles.button } />) }
                </Col>
                <Col md={12} className={ styles.label } >Or enter another amount and press OK</Col>
                <Col md={4} className={ styles.optionsContainer }>
                    <Input onChange={ ({ target: { value : customAmount }}) => this.setState({ customAmount })}
                           min="0"
                           type="number"/>
                    <Button onClick={ () => props.withdraw( this.state.customAmount ) }
                                                             label="OK"
                                                             extraClass={ styles.button } />
                </Col>
               </Col> );
    }

}

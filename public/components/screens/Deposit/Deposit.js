import React, { Component }   from 'react';
import Col                    from 'react-bootstrap/lib/Col';
import Button                 from '../Button';
import Input                  from '../Input';
import * as styles            from './Deposit.css';


export default class Deposit extends Component
{
    constructor()
    {
        super();
        this.state = {};
    }

    render()
    {
      const { props } = this;

      return ( <Col md={12} className={ styles.depositContainer }>
                <Col md={12} className={ styles.label } >Insert Money</Col>
                <Col md={4} className={ styles.optionsContainer }>
                    <Input onChange={ ({ target: { value : customAmount }}) => this.setState({ customAmount })}
                           min="0"
                           type="number"/>
                    <Button onClick={ () => props.deposit( this.state.customAmount ) }
                                                             label="OK"
                                                             extraClass={ styles.button } />
                </Col>
               </Col> );
    }

}

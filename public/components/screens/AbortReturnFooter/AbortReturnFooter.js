import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import Button               from '../Button';
import * as styles          from './AbortReturnFooter.css';
import { withRouter }       from 'react-router';

export default class AbortReturnFooter extends Component
{

    render()
    {
        const { router, abort, goBack } = this.props;
        return(
          <Col md={12} className={ styles.abortReturnContainer }>
                          <Button extraClass={ styles.button }
                                  onClick={ goBack }
                                  label='Go Back'/>
                          <Button extraClass={ styles.button }
                                  onClick={ abort }
                                  label='Abort'/>
          </Col>
        )
    }
}

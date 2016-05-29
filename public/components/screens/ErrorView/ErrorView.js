import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles          from './ErrorView.css';
import { ERROR_MESSAGES }   from '../../../constants';
import { updateStore }      from '../../../store';

export default class ErrorView extends Component
{

    componentWillMount()
    {
        const { params : { errorID } } = this.props;
        const msg = ERROR_MESSAGES[ errorID ] || ERROR_MESSAGES.default;
        this.setState({ msg });
        setTimeout(() => {
          updateStore( { loginAttempts : 0, isCardInserted: false });
          this.props.router.push( '/' )
        }, 4000 );
    }

    render()
    {
        return (<Col md={12} className={styles.errorViewContainer}>
                  { this.state.msg }
                </Col>);
    }
}

import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles          from './SuccessView.css';
import { SUCCESS_MESSAGES } from '../../../constants';
import { updateStore }      from '../../../store';
import Loading              from '../Loading';

export default class SuccessView extends Component
{

    constructor()
    {
        super();
        this.state = {
            msg: <Loading />
        }
    }

    componentWillMount()
    {
        const { params : { successID } } = this.props;
        const msg = SUCCESS_MESSAGES[ successID ];
        const serverDelay = Math.random() * 10000;

        setTimeout(() => {
          this.setState({ msg });
        },  serverDelay );

        setTimeout(() => {
          updateStore( { loginAttempts : 0, isCardInserted: false });
          this.props.router.push( '/' )
        }, serverDelay + 4000 );
    }

    render()
    {
        return (<Col md={12} className={styles.successViewContainer}>
                    { this.state.msg }
                </Col>);
    }
}

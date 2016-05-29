import React, { Component }     from 'react';
import Col                      from 'react-bootstrap/lib/Col';
import * as styles              from './Pin.css';
import Input								    from '../Input';
import Button								    from '../Button';
import { CORRECT_PASSWORD }     from '../../../constants';
import { connect, updateStore } from '../../../store';
import AbortReturnFooter				from '../AbortReturnFooter';

@connect( 'loginAttempts', 'userPassword' )
export default class Pin extends Component
{
		constructor()
		{
				super();
				this.state = {
						userPassword : undefined,
						hasError : false
				};
		}

		onPasswordEnter( { target : { value } } )
		{
				this.setState( { value, hasError : false } );
		}

		tryLogin()
		{
				const loginAttempts = ++this.state.loginAttempts;
				loginAttempts === 3 && this.props.router.push( '/error/loginAttempts' );

				if( this.state.value !== this.state.userPassword )
				{
						updateStore({ loginAttempts } );
						this.setState({ hasError : true });
				}
				else
				{
						updateStore({ loginAttempts : 0 } );
						this.props.router.push( '/services' );
				}
		}

		render()
		{

			const errorMsg = this.state.hasError ? `Wrong password. You have ${3-this.state.loginAttempts} attempts left.` : void(0);

			return (
				<Col md={12} className={ styles.pinContainer } >
	  				<Col md={ 12 } className={ styles.insertPinMsg }> Please insert your PIN</Col>

	          <Col md={ 12 }>
							<Input minLength="0"
										 maxLength="4"
										 hasError={ this.state.hasError }
										 onChange={ this.onPasswordEnter.bind( this ) }
										 type="text" />
						</Col>

						<Col md={ 12 }>
							<div className={ styles.errorMsg }>{ errorMsg }</div>
							<Button extraClass={ styles.loginButton } label="Login" onClick={ this.tryLogin.bind( this ) } />
						</Col>
				</Col>
			);
	}
}

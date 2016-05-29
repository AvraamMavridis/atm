import React, { Component }     from 'react';
import Col                      from 'react-bootstrap/lib/Col';
import { connect, updateStore } from '../../../store';
import AbortReturnFooter 				from '../../screens/AbortReturnFooter';


@connect( 'accountBalance' )
export default class Services extends Component
{
		constructor()
		{
				super();
				this.state = {};
		}

		abort()
		{
				updateStore( { loginAttempts : 0, isCardInserted : false } );
				this.props.router.push('/');
		}

		goBack()
		{
				this.props.router.goBack();
		}

		withdraw( amount )
		{
				const newBalance = this.state.accountBalance - amount;
				if( newBalance >= 0 )
				{
						updateStore({ accountBalance : newBalance });
						this.props.router.push('/success/successfullWithdrawal');
				}
				else
				{
						this.props.router.push('/error/notEnoughMoney');
				}
		}

		render() {
			console.log( this.state.accountBalance )
			return (
				<span>
				{
					React.cloneElement(this.props.children, {
						withdraw : this.withdraw.bind( this )
					 })
				}
				<AbortReturnFooter goBack={ this.goBack.bind( this ) }
													 abort={ this.abort.bind( this ) } />
				</span>)
		}
}

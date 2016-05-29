import React, { Component }     from 'react';
import Col                      from 'react-bootstrap/lib/Col';
import { connect, updateStore } from '../../../store';
import AbortReturnFooter 				from '../../screens/AbortReturnFooter';

// Listen to accountBalance changes from the store
@connect( 'accountBalance', 'deposits', 'withdrawals', 'balanaceHistory' )
export default class Services extends Component
{
		constructor()
		{
				super();
				this.state = {};
		}

		/**
		 * Redirect to the initial page, give the card pack and reset the login attempts
		 */
		abort()
		{
				updateStore( { loginAttempts : 0, isCardInserted : false } );
				this.props.router.push('/');
		}

		/**
		 * Go to the preview view
		 * @return {[type]} [description]
		 */
		goBack()
		{
				this.props.router.goBack();
		}

		/**
		 * Decrease the account balance, if its not enough money left redirect to
		 * error page, otherwise redirect to success view
		 * @param  { Number } amount
		 */
		withdraw( amount )
		{
				const newBalance = this.state.accountBalance - parseInt(amount);
				if( newBalance >= 0 )
				{
						const withdrawals = this.state.withdrawals
						withdrawals.push( { amount, date : new Date() });

						const balanaceHistory = this.state.balanaceHistory;
						balanaceHistory.push({ balance: newBalance, date : new Date() } );

						updateStore({ accountBalance : newBalance, withdrawals, balanaceHistory });
						this.props.router.push('/success/successfullWithdrawal');
				}
				else
				{
						this.props.router.push('/error/notEnoughMoney');
				}
		}

		/**
		 * Increase the account balance and redirect to success page
		 * @param  { Number } amount
		 */
		deposit( amount )
		{
				const newBalance = this.state.accountBalance + parseInt(amount);

				const deposits = this.state.deposits;
				deposits.push( { amount, date : new Date() });

				const balanaceHistory = this.state.balanaceHistory;
				balanaceHistory.push({ balance: newBalance, date : new Date() } );

				updateStore({ accountBalance : newBalance, deposits, balanaceHistory });
				this.props.router.push('/success/successfullInsertMoney');
		}

		render() {

			return (
				<span>
				{
					/** Clones the route children passing extra props **/
					React.cloneElement( this.props.children, {
						withdraw : this.withdraw.bind( this ),
						deposit	 : this.deposit.bind( this ),
						deposits : this.state.deposits,
						withdrawals : this.state.withdrawals,
						balanaceHistory : this.state.balanaceHistory
					} )
				}
				 { /** Abort, Go Back buttons **/ }
				<AbortReturnFooter goBack={ this.goBack.bind( this ) }
													 abort={ this.abort.bind( this ) } />
				</span>)
		}
}

import React    from 'react';
import ReactDOM from 'react-dom';
import Router   from './router';
import { createStore } from './store/store';
import { INITIAL_ACCOUNT_BALANCE,
			  CORRECT_PASSWORD } from './constants';

const initialState =  {
	loginAttempts  : 0,
  accountBalance : INITIAL_ACCOUNT_BALANCE,
	isCardInserted : false,
	userPassword	 : CORRECT_PASSWORD,
	deposits       : [],
	withdrawals    : [],
	balanaceHistory : []
};

createStore( initialState );

export class App extends React.Component {
	render() {
		return (
			<Router/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#atm"));

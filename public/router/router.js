import { appHistory }       from './history';
import { Router, Route, IndexRoute, withRouter }  from 'react-router';
import React, { Component } from 'react';
import Main                 from '../components/containers/Main'
import Services             from '../components/containers/Services'
import Withdrawal           from '../components/screens/Withdrawal';
import Pin                  from '../components/screens/Pin';
import Welcome              from '../components/screens/Welcome';
import ATMServices          from '../components/screens/ATMServices';
import ErrorView         	  from '../components/screens/ErrorView';
import SuccessView         	from '../components/screens/SuccessView';

export default class ATMRouter extends Component
{
	render() {
		return (
      <Router history={ appHistory }>
          <Route path='/' component={ Main } >
            <IndexRoute component={ Welcome } />
            <Route path='/pin' component={ withRouter(Pin) }/>
            <Route path='/services' component={ withRouter(Services) } >
              <IndexRoute component={ withRouter(ATMServices) } />
              <Route path='/deposit' component={ Main }/>
              <Route path='/withdrawal' component={ Withdrawal }/>
              <Route path='/activity' component={ Main }/>
              <Route path='/changepin' component={ Main }/>
            </Route>
						<Route path='/error/:errorID' component={ withRouter(ErrorView) } />
						<Route path='/success/:successID' component={ withRouter(SuccessView) } />
          </Route>
      </Router>
		);
	}
}
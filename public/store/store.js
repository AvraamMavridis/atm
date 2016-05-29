/**
 *  Minimal Store Management using rx
 *
 *  @author  Avraam Mavridis    <avr.mav@gmail.com>
 *
 */

import { BehaviorSubject } from 'rx';
import { pick } from 'lodash';

const stateSubject = new BehaviorSubject();
const noop = () => void 0;

export const createStore = initialState => stateSubject.onNext( { ...initialState } );
export const updateStore = newState => stateSubject.onNext( { ...stateSubject.value, ...newState } );
export const getStore = () => stateSubject;
export const getLastState = () => stateSubject.value;

/**
 * Decorator functions
 * @param  { args : Array of strings } => return function
 * @param { target : ReactComponent } => return decoratated React Component
 */
export const connect = ( ...args ) => ( target ) =>
{
  const obj = Object.create( target.prototype );
  const willMount = obj.componentWillMount;
  const willUnmount = obj.componentWillUnmount;

  target.prototype.componentWillMount = function()
  {
      this.stateListener = stateSubject;

      this.subscription = this.stateListener.map( state => args.length ? pick( state, args ) : state )
                                            .subscribe( state => this.setState( state ),
                                                      error => console.log( error ),
                                                      msg => console.log( msg ) );

      willMount ? willMount.call( this ) : noop();
  };


  target.prototype.componentWillUnmount = function()
  {
      // Unsubscribe on componentWillUnmount, this is nessecary
      // otherwise we call setState on an unmounted component
      this.subscription.dispose();

      willUnmount ? willUnmount.call( this ) : noop();
  };

  return target;
};

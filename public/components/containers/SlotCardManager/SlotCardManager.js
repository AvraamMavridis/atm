import { DragDropContext }      from 'react-dnd';
import HTML5Backend             from 'react-dnd-html5-backend';
import React, { Component }     from 'react';
import Slot                     from '../Slot';
import Card                     from '../Card';
import { withRouter }           from 'react-router';
import { connect, updateStore } from '../../../store';

@connect('isCardInserted')
class SlotCardManager extends Component
{

    constructor()
    {
        super();
        this.state = {};
    }

    navigateToPinScreen()
    {
        updateStore({ isCardInserted : true } );
        this.props.router.push('/pin');
    }

    render()
    {
      return(<span>
                <Slot isCardInserted={ this.state.isCardInserted }
                      onCardDrop={ this.navigateToPinScreen.bind( this ) } />
                <Card isCardInserted={ this.state.isCardInserted } />
             </span>)
    }
}

export default DragDropContext( HTML5Backend )( withRouter( SlotCardManager ) );

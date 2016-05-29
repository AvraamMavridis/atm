import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import * as styles 				  from './Slot.css';
import { DropTarget }       from 'react-dnd';

const Target =
{
    drop( props, monitor, component )
    {
        const dropped = monitor.getItem();
				component.props.onCardDrop();
        return dropped;
    }
};


function collect( connect, monitor )
{
    return {
        connectDropTarget : connect.dropTarget()
    };
}


export class Slot extends Component
{
	render() {
		const { connectDropTarget, isCardInserted } = this.props;
    const slotClass = isCardInserted ? styles.slotCardInserted : styles.slotCardNotInserted;
		const slot = connectDropTarget(<div className={ slotClass }></div>);

		return (
			<Col md={12} className={ styles.atmContainer }>
				{ slot }
			</Col>
		);
	}
}

export default DropTarget( 'ATM', Target, collect )( Slot );

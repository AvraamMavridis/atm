import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import { DragSource }       from 'react-dnd';
import * as styles          from './Card.css';

const Source =
{
    beginDrag( props )
    {
        return props;
    }
};


function collect( connect, monitor )
{
    return {
        connectDragSource : connect.dragSource()
    }
}

export class Card extends Component
{
  	render()
    {
      const { connectDragSource, isCardInserted=false } = this.props;
      const creditCard = isCardInserted ? void(0) : connectDragSource(<div className={ styles.creditCard }></div>);

  		return (
  			<Col md={12}>
  				{ creditCard }
  			</Col>
  		);
  	}
}

export default DragSource( 'ATM', Source, collect )( Card );

import React, { PropTypes, Component } from 'react'
import ItemTypes from './../../ItemTypes'
import { DropTarget } from 'react-dnd'
import classes from './Square.scss'

const markerTarget = {
  drop (props) {
    return props
  }
}

class Square extends Component {
  render () {
    const style = {
      height: this.props.height + 'px',
      width: this.props.width + 'px'
    }
    const { connectDropTarget, children } = this.props
    return connectDropTarget(
      <div className={classes.square} style={style}>
          {children}
      </div>
    )
  }
}

Square.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

export default DropTarget(ItemTypes.MARKER, markerTarget, collect)(Square)

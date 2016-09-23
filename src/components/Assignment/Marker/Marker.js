import React, { Component, PropTypes } from 'react'
import ItemTypes from './../ItemTypes'
import { DragSource } from 'react-dnd'
import classes from './Marker.scss'
const markerSource = {
  beginDrag (props) {
    return props
  },

  endDrag (props, monitor) {
    const marker = monitor.getItem()
    const square = monitor.getDropResult()
    console.log(marker)
    console.log(square)
    marker.setMarkerPosition({
      x: square.x,
      y: square.y,
      targetX: marker.targetX,
      targetY: marker.targetY
    })
  }
}

class Marker extends Component {
  render () {
    const { isDragging, connectDragSource } = this.props
    const { name, width, height } = this.props
    const style = {
      width: width + 'px',
      height: height + 'px',
      borderRadius: height + 'px',
      paddingTop: height / 3 + 'px',
      opacity: isDragging ? 0.4 : 1
    }
    return (
      connectDragSource(
        <div className={classes.marker} style={style}>
           {name}
        </div>
      )
    )
  }
}

Marker.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  targetX: PropTypes.number.isRequired,
  targetY: PropTypes.number.isRequired,
  setMarkerPosition: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource(ItemTypes.MARKER, markerSource, collect)(Marker)

import React, { Component, PropTypes } from 'react'
import classes from './MainView.scss'
import {Col, Button} from 'react-bootstrap'
import Marker from './../Marker'
import Square from './Square/index'
import Chart from './Chart/index'

export default class MainView extends Component {
  renderSquare (i, squareWidth, squareHeight, squaresWholeCount) {
    const x = i % 10
    const y = 9 - Math.floor((i / 10))
    const marker = this.props.addedMarkers.filter(marker => marker.x === x && marker.y === y)
    var piece
    if (marker.length > 0) {
      piece = <Marker
        height={60}
        width={60}
        key={i} {...marker[0]}
        name={marker[0].targetX + ', ' + marker[0].targetY}
        setMarkerPosition={this.props.setMarkerPosition}
      />
    } else {
      piece = null
    }
    return (
      <Square x={x} y={y} key={i} width={squareWidth} height={squareHeight}>
        {piece}
      </Square>
    )
  }

  render () {
    const errorMessage = 'VM120912:27Warning: Stateless function components cannot be given refs (See ref'
    console.log('there is issue https://github.com/gaearon/react-dnd/issues/521 for error:' + errorMessage)
    const squaresCount = 10
    const squaresWholeCount = squaresCount * squaresCount
    const gridWidth = 700
    const gridHeight = 700
    const squareWidth = gridWidth / squaresCount
    const squareHeight = gridHeight / squaresCount
    const squares = []

    for (let i = 0; i < squaresWholeCount; i++) {
      squares.push(this.renderSquare(i, squareWidth, squareHeight, squaresWholeCount))
    }

    var message

    if (this.props.checkStarted) {
      if (this.props.addedMarkersInCorrectPlace) {
        message = <div>Positions are correct!</div>
      } else {
        message = <div>Positions are incorrect!</div>
      }
    }

    return <Col md={8} className={classes.mainView}>
      <div style={{
        width: gridWidth + 'px',
        height: gridHeight + 'px',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute'
      }}>
        {squares}
      </div>

      <Chart width={gridWidth} height={gridHeight} squaresCount={squaresCount} />

      {message}

      <Button disabled={this.props.sidebarMarkers.length !== 0} onClick={this.props.checkPositionsOfAddedMarkers}>
        Check
      </Button>
    </Col>
  }
}

MainView.propTypes = {
  addedMarkers: PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired,
  sidebarMarkers: PropTypes.arrayOf(
    React.PropTypes.object
  ),
  addedMarkersInCorrectPlace: PropTypes.bool.isRequired,
  checkStarted: PropTypes.bool.isRequired,
  setMarkerPosition: PropTypes.func.isRequired,
  checkPositionsOfAddedMarkers: PropTypes.func.isRequired
}

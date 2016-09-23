import React, {Component} from 'react'
import classes from './Sidebar.scss'
import { Col } from 'react-bootstrap'
import Marker from './../Marker'

export default class Sidebar extends Component {
  render () {
    const { sidebarMarkers, setMarkerPosition } = this.props
    return (
      <Col md={1} className={classes.sidebar}>
        Markers:
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {sidebarMarkers.map(function (marker, key) {
            return <div>
              <Marker
                key={key}
                {...marker}
                width={60}
                height={60}
                name={marker.targetX + ', ' + marker.targetY}
                setMarkerPosition={setMarkerPosition}
                />
            </div>
          })}
        </div>
      </Col>
    )
  }
}

Sidebar.propTypes = {
  sidebarMarkers: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  setMarkerPosition: React.PropTypes.func.isRequired
}


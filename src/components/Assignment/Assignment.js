import React from 'react'
import Sidebar from './Sidebar'
import { Row } from 'react-bootstrap'
import MainView from './MainView'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

export const Assignment = (props) => (
  <Row>
    <Sidebar
      sidebarMarkers={props.assignment.sidebarMarkers}
      setMarkerPosition={props.setMarkerPosition}
    />
    <MainView
      checkStarted={props.assignment.checkStarted}
      addedMarkersInCorrectPlace={props.assignment.addedMarkersInCorrectPlace}
      checkPositionsOfAddedMarkers={props.checkPositionsOfAddedMarkers}
      setMarkerPosition={props.setMarkerPosition}
      addedMarkers={props.assignment.addedMarkers}
      sidebarMarkers={props.assignment.sidebarMarkers}
    />
  </Row>
)

Assignment.propTypes = {
  setMarkerPosition: React.PropTypes.func.isRequired,
  checkPositionsOfAddedMarkers: React.PropTypes.func.isRequired,
  assignment: React.PropTypes.object
}

export default DragDropContext(HTML5Backend)(Assignment)


// ------------------------------------
// Constants
// ------------------------------------
export const SET_MARKER_POSITION = 'SET_MARKER_POSITION'
export const CHECK_POSITION_OF_ADDED_MARKERS = 'CHECK_POSITION_OF_ADDED_MARKERS'

// ------------------------------------
// Actions
// ------------------------------------
export function setMarkerPosition (position) {
  return {
    type: SET_MARKER_POSITION,
    payload: position
  }
}

export function checkPositionsOfAddedMarkers () {
  return {
    type: CHECK_POSITION_OF_ADDED_MARKERS
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const actions = {
  setMarkerPosition,
  checkPositionsOfAddedMarkers
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_MARKER_POSITION]: function (state, action) {
    addedMarkers = state.addedMarkers.filter(
      marker => !(marker.targetX === action.payload.targetX && marker.targetY === action.payload.targetY
    ))

    var addedMarkers = [
      ...addedMarkers,
      action.payload
    ]

    var sidebarMarkers = state.sidebarMarkers.filter(
      marker => !(marker.targetX === action.payload.targetX && marker.targetY === action.payload.targetY
    ))
    return {
      ...state,
      addedMarkers,
      sidebarMarkers
    }
  },
  [CHECK_POSITION_OF_ADDED_MARKERS]: function (state, action) {
    const addedMarkersInCorrectPlace = state.addedMarkers.every(
      marker => marker.x === marker.targetX && marker.y === marker.targetY
    )
    const checkStarted = true
    return {
      ...state,
      addedMarkersInCorrectPlace,
      checkStarted
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  addedMarkers: [],
  addedMarkersInCorrectPlace: false,
  checkStarted: false,
  sidebarMarkers: [
    {
      targetX: 6,
      targetY: 6,
      x: 0,
      y: 0
    },
    {
      targetX: 7,
      targetY: 7,
      x: 0,
      y: 0
    },
    {
      targetX: 4,
      targetY: 4,
      x: 0,
      y: 0
    },
    {
      targetX: 5,
      targetY: 5,
      x: 0,
      y: 0
    }
  ]
}
export default function assignmentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

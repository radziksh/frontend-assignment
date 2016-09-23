// Chart.js
import React from 'react'
import ReactDOM from 'react-dom'
import d3Chart from './d3Chart'

var Chart = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    squaresCount: React.PropTypes.number
  },

  componentDidMount: function () {
    var el = ReactDOM.findDOMNode(this)
    d3Chart.create(el, {
      width: this.props.width,
      height: this.props.height,
      squaresCount: this.props.squaresCount
    })
  },

  render: function () {
    return (
      <div className="Chart"></div>
    )
  }
})

export default Chart

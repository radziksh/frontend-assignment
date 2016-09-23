import * as d3 from 'd3'

var d3Chart = {}

d3Chart.create = function (el, props, state) {
  var width = props.width
  var height = props.height

  var xPadding = width / props.squaresCount / 2
  var yPadding = height / props.squaresCount / 2

  var xScale = d3.scaleLinear().range([xPadding, width - xPadding]).domain([0, 9])
  var xAxis = d3.axisBottom().scale(xScale).tickPadding(8).tickSizeInner(-width + xPadding * 2)

  var yScale = d3.scaleLinear().range([height - yPadding, yPadding]).domain([0, 9])
  var yAxis = d3.axisLeft().scale(yScale).tickPadding(8).tickSizeInner(-height + yPadding * 2)

  var svg = d3.select(el).append('svg')
        .attr('class', 'axis')
        .attr('width', width)
        .attr('height', height)
  svg.attr('style', 'margin-left:-45px')
  svg.append('g')
        .attr('transform', 'translate(0,' + (height - xPadding) + ')')
        .call(xAxis)

  svg.append('g')
        .attr('transform', 'translate(' + yPadding + ',0)')
        .call(yAxis)
}

export default d3Chart

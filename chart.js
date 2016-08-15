

var dataset = [
  {label: 'a', count: 10},
  {label: 'b', count: 20},
  {label: 'c', count: 40},
  {label: 'd', count: 80}
]

var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
  .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

var pie = d3.pie()
  .value(function(d) {return d.count; })
  .sort(null);

var path = svg.selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d, i) {
    return color(d.data.label);
  })

// Set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 150, left: 100 },
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3 
.select("#service_barplot")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand().range([0, width]).padding(1);
var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");

// Initialize the Y axis
var y = d3.scaleLinear().range([height, 0]);
var yAxis = svg.append("g").attr("class", "myYaxis");

// A function that creates / updates the plot for a given variable
function update(selectedVar) {
// Update the selected year label
d3.select("#selectedYear").text(selectedVar);

// Parse the data
d3.csv("srv_pop.csv", function (data) {
  // X axis
  x.domain(data.map(function (d) { return d.service_group; }));
  xAxis.transition().duration(1000).call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-40)")
    .style("text-anchor", "end");

  // Add Y axis
  y.domain([0, d3.max(data, function (d) { return +d[selectedVar]; })]);
  yAxis.transition().duration(1000).call(d3.axisLeft(y));

  // Variable u: map data to existing lines
  var j = svg.selectAll(".myLine").data(data);

  // Update lines
  j.enter()
    .append("line")
    .attr("class", "myLine")
    .merge(j)
    .transition()
    .duration(1000)
    .attr("x1", function (d) { return x(d.service_group); })
    .attr("x2", function (d) { return x(d.service_group); })
    .attr("y1", y(0))
    .attr("y2", function (d) { return y(d[selectedVar]); })
    .attr("stroke", "grey");

  // Variable u: map data to existing circles
  var u = svg.selectAll("circle").data(data);

  // Update circles
  u.enter()
    .append("circle")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("cx", function (d) { return x(d.service_group); })
    .attr("cy", function (d) { return y(d[selectedVar]); })
    .attr("r", 8)
    .attr("fill", "#69b3a2");
});
}

// Initialize plot
update('2000');
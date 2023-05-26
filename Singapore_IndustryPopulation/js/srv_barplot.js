// Set the dimensions and margins of the graph
var margin = { top: 50, right: 30, bottom: 100, left: 220 },
  width = 560 - margin.left - margin.right,
  height = 650 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
const svg = d3.select("#service_barplot")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Existing data
const data = [
  { service_group: 'Wholesale & Retail Trade', year2000: 253.7, year2022: 351.8 },
  { service_group: 'Transportation & Storage', year2000: 149.6, year2022: 207.4 },
  { service_group: 'Accommodation & Food Services', year2000: 92.6, year2022: 126.6 },
  { service_group: 'Information & Communications', year2000: 55.2, year2022: 132.8 },
  { service_group: 'Financial & Insurance Services', year2000: 91.3, year2022: 235.8 },
  { service_group: 'Real Estate Services', year2000: 38.4, year2022: 59.7 },
  { service_group: 'Professional Services', year2000: 70.8, year2022: 197.6 },
  { service_group: 'Administrative & Support Services', year2000: 53.8, year2022: 120.3 },
  { service_group: 'Public Administration & Education', year2000: 171.3, year2022: 309.6 },
  { service_group: 'Health & Social Services', year2000: 46.3, year2022: 160.3 },
  { service_group: 'Arts, Entertainment & Recreation', year2000: 19.4, year2022: 34.5 },
  { service_group: 'Other Community, Social & Personal Services', year2000: 46, year2022: 69.8 },
];

// Add X axis
const x = d3.scaleLinear()
  .domain([0, 400])
  .range([0, width]);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));


// Y axis
const y = d3.scaleBand()
  .range([0, height])
  .domain(data.map(function (d) { return d.service_group; }))
  .padding(1);
svg.append("g")
  .call(d3.axisLeft(y));

// Lines
svg.selectAll("myline")
  .data(data)
  .join("line")
  .attr("x1", function (d) { return x(d.year2000); })
  .attr("x2", function (d) { return x(d.year2022); })
  .attr("y1", function (d) { return y(d.service_group); })
  .attr("y2", function (d) { return y(d.service_group); })
  .attr("stroke", "#FFF")
  .attr("stroke-width", "1px");

// Circles of variable 1
svg.selectAll("mycircle")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.year2000); })
  .attr("cy", function (d) { return y(d.service_group); })
  .attr("r", "6")
<<<<<<< Updated upstream:Singapore_IndustryPopulation/js/srv_barplot.js
  .style("fill", "#FCBB0A")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("r", "8").style("fill", "#FFF");
=======
  .style("fill", "#69b3a2")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("r", "8").style("fill", "gray");
>>>>>>> Stashed changes:Singapore_IndustryPopulation/service_barplot/srv_barplot.js
    svg.append("text")
      .attr("class", "tooltip")
      .attr("x", x(d.year2000) + 10)
      .attr("y", y(d.service_group) - 10)
      .text(d.year2000)
<<<<<<< Updated upstream:Singapore_IndustryPopulation/js/srv_barplot.js
      .attr("fill", "#FFF")
      .attr("font-size", "12px");
  })
  .on("mouseout", function (event, d) {
    d3.select(this).attr("r", "6").style("fill", "#FCBB0A");
=======
      .attr("fill", "#000")
      .attr("font-size", "12px");
  })
  .on("mouseout", function (event, d) {
    d3.select(this).attr("r", "6").style("fill", "#69b3a2");
>>>>>>> Stashed changes:Singapore_IndustryPopulation/service_barplot/srv_barplot.js
    svg.select(".tooltip").remove();
  });

// Circles of variable 2
svg.selectAll("mycircle")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.year2022); })
  .attr("cy", function (d) { return y(d.service_group); })
  .attr("r", "6")
<<<<<<< Updated upstream:Singapore_IndustryPopulation/js/srv_barplot.js
  .style("fill", "#E15D14")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("r", "8").style("fill", "#FFF");
=======
  .style("fill", "#4C4082")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("r", "8").style("fill", "gray");
>>>>>>> Stashed changes:Singapore_IndustryPopulation/service_barplot/srv_barplot.js
    svg.append("text")
      .attr("class", "tooltip")
      .attr("x", x(d.year2022) + 10)
      .attr("y", y(d.service_group) - 10)
      .text(d.year2022)
<<<<<<< Updated upstream:Singapore_IndustryPopulation/js/srv_barplot.js
      .attr("fill", "#FFF")
      .attr("font-size", "12px");
  })
  .on("mouseout", function (event, d) {
    d3.select(this).attr("r", "6").style("fill", "#E15D14");
=======
      .attr("fill", "#000")
      .attr("font-size", "12px");
  })
  .on("mouseout", function (event, d) {
    d3.select(this).attr("r", "6").style("fill", "#4C4082");
>>>>>>> Stashed changes:Singapore_IndustryPopulation/service_barplot/srv_barplot.js
    svg.select(".tooltip").remove();
  });

// Add labels to show the means of different circles

// Add Year 2000 icon
svg.append("circle")
  .attr("cx", width - 150)
  .attr("cy", height + 50)
  .attr("r", 6)
  .style("fill", "#FCBB0A");

svg.append("text")
  .attr("x", width - 140)
  .attr("y", height + 55)
  .text("Year 2000")
  .attr("fill", "#FFF")
  .attr("font-size", "12px");

// Circles of variable 2
svg.append("circle")
  .attr("cx", width - 60)
  .attr("cy", height + 50)
  .attr("r", 6)
  .style("fill", "#E15D14");

svg.append("text")
  .attr("x", width - 50)
  .attr("y", height + 55)
  .text("Year 2022")
  .attr("fill", "#FFF")
  .attr("font-size", "12px");
var pointInfo = document.getElementById("pointInfo");
var zoomLevel = 1;

var width = 700,
    height = 580;

var panX = width/2,
    panY = height/2;

var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

var g, geoPath, albersProjection;

var rem = function(){
    d3.selectAll('g').remove();
    d3.selectAll('circle').remove();
};

var indiv = function(){
    rem();

    g = svg.append('g');

    albersProjection = d3.geoAlbers()
        .scale(60000 + 10000*(zoomLevel)**2)
        .rotate([74.0060, 0])
        .center([0, 40.7128])
        .translate([panX, panY]);

    geoPath = d3.geoPath().projection(albersProjection);

    g.selectAll('path')
        .data(boroughs_json.features)
        .enter()
        .append('path')
        .attr('fill', '#2bf')
        .attr('stroke', '#000')
        .attr('d', geoPath);

    svg.selectAll("circle")
        .data(points.features).enter()
        .append("circle")
        .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
        .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
        .attr("r", (d) => Math.min(d.properties.num_calls/(30 - zoomLevel*2), 5 + zoomLevel) + "px")
        .attr("fill", "red")
        .on('click', (d) => {
            d3.select("#location").html(d.geometry.coordinates[1] + ", <br>" + d.geometry.coordinates[1]);
            d3.select("#numCalls").html(d.properties["num_calls"]);
        })
};
indiv();

var resize = function(delta) {
    zoomLevel += delta;
    if (zoomLevel < -1) {
        zoomLevel -= delta;
        console.log("Can't zoom out that much");
        return;
    } else if (zoomLevel > 20) {
        zoomLevel -= delta;
        console.log("Can't zoom in that much");
        return;
    }
    console.log("Zoom Level: " + zoomLevel);

    var zoomDelta = 10000*(zoomLevel)**2;
    if (zoomLevel < 0) {
        zoomDelta *= -1;
    }
    albersProjection.scale(60000 + zoomDelta)

    g.selectAll('path')
        .transition()
        .duration(1000)
        .attr('d', geoPath);

    svg.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
        .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
        .attr("r", (d) => Math.max(
            Math.min(
                d.properties.num_calls/(31 - zoomLevel*1.5),
                5 + zoomLevel),
            zoomLevel/2) + "px");
}

//doesn't work properly
var moveTo = function(x, y) {
    albersProjection.translate([x, y]);
    geoPath.projection(albersProjection);

    g.selectAll('path')
        .transition()
        .duration(1000)
        .attr('d', geoPath);

    svg.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
        .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
        .attr("r", (d) => Math.min(d.properties.num_calls/10, 10) + "px");
}

d3.select("#zoom").on('click', () => resize(1));
d3.select("#unzoom").on('click', () => resize(-1));
d3.select('body').on('keydown', () => {
    switch(d3.event.keyCode) {
        case 37:
            //arrow left
            panX += 20;
            break;
        case 38:
            //arrow up
            panY += 20;
            break;
        case 39:
            //arrow right
            panX -= 20;
            break;
        case 40:
            //arrow down
            panY -= 20;
            break;
    }

    albersProjection.translate([panX, panY]);

    g.selectAll('path')
        .attr('d', geoPath);

    svg.selectAll("circle")
        .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
        .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
});

var zip = function(){
    rem();

    g = svg.append('g');

    g.selectAll('path')
        .data(zipcode.features)
        .enter()
        .append('path')
        .attr('fill', '#2bf')
        .attr('stroke', '#000')
        .attr('fill-opacity', function(d) {
            var numCalls = zip_data[d.properties.postalcode];
            if (!numCalls) {
                numCalls = 0;
            }
            return numCalls/3000
        })
        .attr('d', geoPath)
        .on('click', (d) => {
            d3.select('#location').html(d.properties.postalcode );
            d3.select('#numCalls').html(zip_data[d.properties.postalcode]);
            console.log(d.properties.postalcode + " has " + zip_data[d.properties.postalcode])
        });
};

d3.select('#dots').on('click', indiv);
d3.select('#zip').on('click', zip);

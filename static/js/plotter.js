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

};
indiv();
/*
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
*/
d3.select('#zip').on('click', zip);

var svg = d3.select('svg')

var allPaths;
var clearShading = function(){
    
}

var violationByZipcode = [];

d3.csv("static/data/violation_by_zipcode.csv", function(data){
    data.forEach( function(d){
	violationByZipcode[parseInt(d.zipcode)] =  parseInt(d.number_of_violations);
    })
});

console.log("violation data:");
console.log(violationByZipcode);

var makeMap = function(){
    allPaths = svg.append('g')

    albersProjection = d3.geoAlbers()
        .scale(70000)
        .rotate([74.0060, 0])
        .center([0, 40.7128])
	.translate([0, 0]);

    geoPath = d3.geoPath().projection(albersProjection);
    
    allPaths.selectAll('path')
	.data(zipcode.features) //zipcode data here
	.enter()
	.append('path')
	.attr('fill', '#ffffff')
        .attr('stroke', '#000000')
	.attr('fill-opacity', function(d) {
	    var numViolations = violationByZipcode[d.properties.postalcode]
	    //jasper don't know postal code = zip code
	    //postal code is the property name in zipcode map JSON
            if (!numViolations) {
                numViolations = 0;
            }
	    console.log(numViolations/10050)
            return numViolations/10050
	})
	.attr('d', geoPath);
}

makeMap();
var slider = document.getElementById("yearRange");
var output = document.getElementById("year");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var svg = d3.select('svg')
    .attr('width', 700)
    .attr('height', 600)
var allPaths;
var clearShading = function(){ //might need this to clear map to redraw with different yearly data
    allPaths = svg.append('g');
    allPaths.selectAll('path')
//	.data(zipcode.features) //zipcode data here
//	.enter()
//	.append('path')
	.attr('fill', '#ffffff')
        .attr('stroke', '#ffffff')
	.attr('fill-opacity', '#ffffff')
};

var violationByZipcode = [];
var violationByYear = [];
violationByYear[2014] = [];
violationByYear[2015] = [];
violationByYear[2016] = [];
violationByYear[2017] = [];

//Use `violationByYear[year][zipcode]` to access number of violations in a zipcode zone for a given year

var loadData = function(){
    clearShading();
    d3.csv("static/data/violation_by_zipcode.csv", function(data){
	data.forEach( function(d){
	    violationByZipcode[parseInt(d.zipcode)] =  parseInt(d.number_of_violations);
	});
    });
    d3.csv("static/data/2014.csv", function(data){
	data.forEach(function(d){
	    violationByYear[2014][parseInt(d.zipcode)] = parseInt(d.number_of_violations);
	});
    });
    d3.csv("static/data/2015.csv", function(data){
	data.forEach(function(d){
	    violationByYear[2015][parseInt(d.zipcode)] = parseInt(d.number_of_violations);
	});
    });
    d3.csv("static/data/2016.csv", function(data){
	data.forEach(function(d){
	    violationByYear[2016][parseInt(d.zipcode)] = parseInt(d.number_of_violations);
	});
    });
    d3.csv("static/data/2017.csv", function(data){
	data.forEach(function(d){
	    violationByYear[2017][parseInt(d.zipcode)] = parseInt(d.number_of_violations);
	});
    });
} //data for 2012, 2013, and 2018 are not included because of their extremely small size/incompleteness

console.log("violation data:");
//console.log(violationByZipcode);
//console.log(violationByZipcode[11220]);
console.log("2015:");
console.log(violationByYear[2015]);

var makeMap = function(){
    clearShading();
    allPaths = svg.append('g')

    albersProjection = d3.geoAlbers()
        .scale(70000)
        .rotate([74.0060, 0])
        .center([0, 40.7128])
	.translate([350, 300]);

    geoPath = d3.geoPath().projection(albersProjection);
    
    allPaths.selectAll('path')
	.data(zipcode.features) //zipcode data here
	.enter()
	.append('path')
	.attr('fill', '#ff0000')
        .attr('stroke', '#000000')
	.attr('fill-opacity', function(d) {
	    var zipcode = parseInt(d.properties.postalcode);
	    var sliderval = parseInt(slider.value);
	    console.log(sliderval);
	    var numViolations = violationByYear[sliderval][zipcode];
	    console.log(numViolations);
	    //console.log(numViolations);
	    //var numViolations = violationByZipcode[zipcode];
	    if (!numViolations){
		//numViolations = 0;
	    }
	    //console.log(violationByZipcode[10118])
	    //console.log(numViolations/1005);
	    return numViolations/10050;
	})
	.attr('d', geoPath);
}

var makeMap2 = function(){
    clearShading();
    allPaths = svg.append('g')

    albersProjection = d3.geoAlbers()
        .scale(70000)
        .rotate([74.0060, 0])
        .center([0, 40.7128])
	.translate([350, 300]);

    geoPath = d3.geoPath().projection(albersProjection);
    
    allPaths.selectAll('path')
	.data(zipcode.features) //zipcode data here
	.enter()
	.append('path')
	.attr('fill', '#ff0000')
        .attr('stroke', '#000000')
	.attr('fill-opacity', function(d) {
	    var zipcode = parseInt(d.properties.postalcode);
	    var sliderval = parseInt(slider.value);
	    console.log(sliderval);
	    //var numViolations = violationByYear[sliderval][zipcode];
	    console.log(numViolations);
	    //console.log(numViolations);
	    var numViolations = violationByZipcode[zipcode];
	    if (!numViolations){
		//numViolations = 0;
	    }
	    //console.log(violationByZipcode[10118])
	    //console.log(numViolations/1005);
	    return numViolations/10050;
	})
	.attr('d', geoPath);
}


loadData();
setTimeout(function(){
    console.log(violationByZipcode[11220]);
    makeMap();
}, 500)
var slider = document.getElementById("yearRange");
var output = document.getElementById("year");
output.innerHTML = slider.value;

console.log("slider value:");
console.log(slider.value);

document.getElementById("yearRange").addEventListener("click", makeMap);

slider.oninput = function() {
  output.innerHTML = this.value;
}

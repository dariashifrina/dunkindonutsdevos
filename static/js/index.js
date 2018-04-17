//gottem host on local server
//$  python -m SimpleHTTPServer
//port 8000

var svg
var svgDoc
var counties
var paths

window.onload = function(){
    svg  = document.getElementById("vimage");
    svgDoc = svg.contentDocument;
    console.log(svgDoc);
    var alb = svgDoc.getElementById("Albany");
    console.log(alb);

    alb.setAttributeNS(null,"fill","ff2332");
    var polys = d3.select(svgDoc).selectAll('polygon');
    var paths = d3.select(svgDoc).selectAll('path');
    console.log(polys);
    console.log(paths);

    counties = [polys, paths];

    //counties[0] contains polygon county borders
    counties[0].attr('fill','green');

    //counties[1] contains county borders that are paths
    counties[1].attr('fill','orange');

    console.log(counties);

    var county
    for each (county in counties[0]){
	county.addEventListener("click", showMore);
    }
    for each (county in counties[1]){
	county.addEventListener("click", showMore);
    }
}

var showMore = function(){
    /*
      Get data from data/clean_data.csv
      Read info from corresponding section
      Shade the county appropriately
     */
}

//problem, rest of code runs before window.onload finishes
console.log(counties);
//the following line will cause an error because counties is still undefined.
console.log(counties[0]);

/*

Solution:

Have all setup be done in window.onload

User interactions handled by event listeners AFTER the page has loaded

*/

var slider = document.getElementById("yearRange");
var output = document.getElementById("year");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

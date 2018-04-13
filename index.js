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




/*
//WORKS SOMETIMES
var svg  = document.getElementById("vimage");
console.log(svg);

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
svg.addEventListener("load",function(){
    
    // get the inner DOM of nymap.svg
    var svgDoc = svg.contentDocument;
    console.log(svgDoc);
    // get the inner element by id
    var alb = svgDoc.getElementById("Albany");
    // add behaviour
    alb.setAttributeNS(null,"fill","ff2332");
    
}, false);
*/

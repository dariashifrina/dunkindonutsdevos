//gottem host on local server
//$  python -m SimpleHTTPServer
//port 8000
window.onload = function(){
    var svg  = document.getElementById("vimage");
    var svgDoc = svg.contentDocument;
    console.log(svgDoc);
    var alb = svgDoc.getElementById("Albany");
    console.log(alb);

    alb.setAttributeNS(null,"fill","ff2332");
    var poly = d3.select(svgDoc).selectAll('polygon');

    poly.attr('fill','green');
    console.log(poly);
 
    
   
    
    
}


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

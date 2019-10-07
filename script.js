
window.app = {};

window.onload = function(){

    $.getJSON("data/201909.json", function(json) {

      window.app.treemap = new d3plus.Treemap()
      .data(json)
      .groupBy(["g1", "g2"])
      .select("#graphPanel")
      .sum("value")
      .render();

      window.app.resizeChart();
  });    
  
}

window.app.resizeChart = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById('topPanel').setAttribute("style","height: " + 60 + "px");
    document.getElementById('mainPanel').setAttribute("style","padding-left:10px");

    if(window.app.treemap) {
      window.app.treemap.width(w-20);
      window.app.treemap.height(h-60-50);

      window.app.treemap.render();
    }
    console.log("w = " + w + ", h = " + h)
}

window.addEventListener('load', function(event){
    window.app.resizeChart();
    
  });

window.addEventListener('resize', function(event){
    window.app.resizeChart();
  });





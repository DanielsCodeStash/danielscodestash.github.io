
window.app = {};

window.onload = function(){

    $('#forwardButton').click(function(e) {  
      window.app.changeData("data/201909.json");
    });

    $('#backButton').click(function(e) {  
      window.app.changeData("data/201910.json");
    });


    window.app.displayMonth("data/201909.json");
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

window.app.displayMonth = function(datapath) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    var prefixLength = "data/".length;
    var yearLength = 4;
    var monthLength = 2;

    var year = datapath.substring(prefixLength, prefixLength+yearLength);
    var month = datapath.substring(prefixLength + yearLength, prefixLength + yearLength+ monthLength);

    var text = monthNames[month-1] + " " + year;

    $("#activeMonth").text(text);
} 

window.app.changeData = function(datapath) {
  window.app.displayMonth(datapath);
  window.app.treemap.data(datapath);
  window.app.treemap.render();
  
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





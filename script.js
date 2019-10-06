
window.app = {};

window.onload = function(){

    var data = [
        { g1: "Bostad", g2: "Amortering", value: 3125 },
        { g1: "Bostad", g2: "Ränta", value: 2092 },
        { g1: "Bostad", g2: "Hyra", value: 2618 },
        { g1: "Bostad", g2: "Vatten", value: 200 },
        { g1: "Bostad", g2: "El", value: 325 },
    
        { g1: "Fasta utgift", g2: "Tandvård", value: 98 },
        { g1: "Fasta utgift", g2: "Akassa", value: 110 },
        { g1: "Fasta utgift", g2: "CSN", value: 594 },
        { g1: "Fasta utgift", g2: "Försäkring", value: 98 },
        { g1: "Fasta utgift", g2: "Linser", value: 350 },
        { g1: "Fasta utgift", g2: "Telfon", value: 99 },
        { g1: "Fasta utgift", g2: "Bank", value: 35 },
        { g1: "Fasta utgift", g2: "Streaming", value: 350 },
    
        { g1: "Base", g2: "Mat och bas", value: 5456 },
        { g1: "Base", g2: "Öl", value: 1194 },
    
        { g1: "One time", g2: "Bulk tandvård", value: 1600 },
        { g1: "One time", g2: "Plantering LED", value: 750 },
        { g1: "One time", g2: "Hörlurar", value: 900 },
        { g1: "One time", g2: "Lödning/Multimeter", value: 600 },
        { g1: "One time", g2: "Kassaskåp", value: 500 },
        { g1: "One time", g2: "Datorspel", value: 400 },
    
    
        { g1: "Ingrid", g2: "Gym", value: 399 },
        { g1: "Ingrid", g2: "Telefon", value: 99 },
        { g1: "Ingrid", g2: "Spotify", value: 49 },
    
        { g1: "Sparande", g2: "Sparande", value: 6500 },
      ];
    
      window.app.treemap = new d3plus.Treemap()
        .data(data)
        .groupBy(["g1", "g2"])
        .select("#graphPanel")
        .sum("value")
        .render();     
}



window.app.resizeChart = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById('topPanel').setAttribute("style","height: " + 60 + "px");
    document.getElementById('mainPanel').setAttribute("style","padding-left:10px");

    window.app.treemap.width(w-40);
    window.app.treemap.height(h-60-50);

    window.app.treemap.render();
    console.log("w = " + w + ", h = " + h)
}


window.addEventListener('load', function(event){
    window.app.resizeChart();
    
  });

window.addEventListener('resize', function(event){
    window.app.resizeChart();
  });





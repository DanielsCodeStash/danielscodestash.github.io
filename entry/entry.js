$(document).ready(function () {



      $.get({
        url: "http://localhost:8080/greeting",
        success: function(data) {
            window.alert(JSON.stringify(data));
        }
      });
})
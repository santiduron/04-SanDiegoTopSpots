$(document).ready(function() {
  listSpots();
  function listSpots() {
    $.getJSON("topspots.json", function(data) {
      $.each(data, function(index, item) {
        var currentRow = "<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href='https://www.google.com/maps?q=" + item.location + "'><button id='submitButton' class='btn btn-info'>Google Maps</button></a></td></tr>";
        $(currentRow).appendTo('#dataInfo');
      });
    });
  };
})

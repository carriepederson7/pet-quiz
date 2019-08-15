$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();

    var home=$("input:radio[name=home]:checked").val();
    var play=$("input:radio[name=play]:checked").val();
    var space=$("input:radio[name=space]:checked").val();
    var noise=$("input:radio[name=noise]:checked").val();

    if (!home || !play || !space || !noise) {
      alert("Please answer the questions.")
    } else if (play === "often" && space != "small" && noise != "low") {
      $("#dog").show();
    } else if (noise === "low" && play === "rarely" || home === "rarely") {
      $("#turtle").show();
    } else {
      $("#cat").show();
    }

  });
});

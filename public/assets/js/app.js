// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data(id);
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"}).then(
      function() {
        console.log("burger is devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burgerInput").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger_name = $("#burgerInput").val();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: burger_name
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    var id = $(this).data(id);
    alert(id);
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$("#boton").click(function () {
  // GET AJAX
  $.get(`http://localhost:5000/amigos`, function (data) {
    // vanilla javascript
    data.forEach((lement) => {
      $("#lista").append("<li>" + lement.name + "</li>");
    });
  });
});
$("#search").click(function () {
  var id = $("#input").val();
  $.get(`http://localhost:5000/amigos/` + id, function (amigo) {
    // vanilla javascript
    $("#amigo").text(amigo.name);
  });
});
$("#delete").click(function () {
  var id = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/` + id,
    type: "DELETE",
    success: function () {
      $("#sucess").text("tu amigo fue borrado con exito");
    },
  });
});

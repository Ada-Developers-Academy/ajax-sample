$( document ).ready(function() {  
  $.ajax({
    url: "http://localhost:3000/products",
    dataType: "json",
    success: function(data, textStatus,xhr) {
      $.each(data, function(index, product) {
        var html = "<li class='product'>"+
          product.name+"</li>"
        $("ul.products").append(html)
      });
    },
    error: function() {
      alert('error')
    }
  })
  
  $("#product-form").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      dataType: "json",
      type: "POST",
      data: $(this).serialize(),
      success: function(product, textStatus, xhr) {
        var html = "<li class='product'>"+
          product.name+"</li>"
        $("ul.products").append(html);
      }
    })
  });
});

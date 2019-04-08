$(function() {
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $.getJSON( url, {
    id: "148752342@N05",
    format: "json"
  }).done( function(data) {
    console.log(data);
    $.each(data.items, function(index,item){
      console.log(item);
      $("<img>").attr("src",item.media.m).appendTo('#flickr');
      return false;
    });
  }).fail( function() {
    alert("AJAX call failed. ");
  });
});

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

$(function() {
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $.getJSON( url, {
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done( function(data) {
    console.log(data);
    $.each(data.items, function(index,item){
      console.log(item);
      $("<img>").attr("src",item.media.m).appendTo('#flickr');
    });
  }).fail( function() {
    alert("AJAX call failed. ");
  });
});

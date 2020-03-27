$.getJSON( "ajax/https://rawcdn.githack.com/Emanuele1996/dictio/0f0ea02dad16a3d512f2427a272013fa7de45fec/citta.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
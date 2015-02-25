'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var playerIcon = 'X';

$('tbody').on( "click", 'td', function(event){
  //$( ".span" ).html( event.target.id );
  console.log($(this));
  $(this).append(playerIcon);
  //fb.push( event.target.className );
  //var i = event.target.attr('id');
  //alert(i);

});

//$( "div" ).click(function() {
  // `this` is the DOM element that was clicked
  //var index = $( "div" ).index( this );
  //$( "span" ).text( "That was div index #" + index );
//});
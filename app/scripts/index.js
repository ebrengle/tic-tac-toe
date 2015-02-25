'use strict';
//Firebase URL
var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var playerIcon = 'X';

$('tbody').on( "click", function(event){
  $( ".span" ).html( event.target.className );
  fb.push( event.target.className );
  //var index = $('.item1').index( this );

  //$('.item1').text( "This is" + index);

});

'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');

var currentPlayer = "X";

function changePlayer(){
    if( currentPlayer  == "X" )
        currentPlayer = "O";
    else
        currentPlayer = "X";
}

$('td').on('click', function(event){
    // This = current TD
    $(this).append( currentPlayer );
    $(this).unbind("click");
    changePlayer();
    event.preventDefault();
});

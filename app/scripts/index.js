'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var firstPlayer,
    secondPlayer,
    playerName;

//Set first player to X
var currentPlayer = "X";

//Funcation that allows player one to go first with an X then player two is an O
function changePlayer(){
    if( currentPlayer  == "X" )
        currentPlayer = "O";
    else
        currentPlayer = "X";
}

//Created an event listener on click of Table TD that appeneds first player(currentplayer)
//an X then flips to an O on next players turn and unbide allows players to not click in an clciked area already.
$('td').on('click', function(event){
    $(this).append( currentPlayer );
    $(this).unbind("click");
    changePlayer();
    console.log($(this).index(), $(this).closest('tr').index());
    event.preventDefault();
});


//Create player 1 (x) and player 2 (o)
$('#submit-player').on('click', function(event){
  event.preventDefault();
  playerName = $('.playerName').val();
  assignPlayer();
  console.log(firstPlayer);
  console.log(secondPlayer);
});

//Function to check the status of firstPlayer & secondPlayer
function assignPlayer() {
  if (firstPlayer === undefined) {
    firstPlayer = playerName;
    } else {
    secondPlayer = playerName;
  }
};

'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var firstPlayer,
    firstPlayerScore = {},
    secondPlayer,
    secondPlayerScore = {},
    playerName;


//Set first play to X
var currentPlayer = "X";

//Funcation that allows player one to go first with an X then player two is an O
function changePlayer(){
  if( currentPlayer  === "X" )
      currentPlayer = "O";
  else
      currentPlayer = "X";
}

//Created an event listener on click of Table TD that appeneds first player(currentplayer)
//an X then flips to an O on next players turn and unbide allows players to not click in an clciked area already.
$('td').on('click', function(event){
  $(this).append( currentPlayer );
  $(this).unbind("click");

  logVal();

  changePlayer();

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
  };
};

//Scoring function that tracks the moves of players 1 & 2
function logVal() {
  if (($('#A1').text() === $('#A2').text() && $('#A1').text() === $('#A3').text())
    // (($('#B1').text() === $('#B2').text() && $('#B1').text() === $('#B3').text()))
    //|| ($('#C1').text() === $('#C2').text() && $('#C1').text() === $('#C3').text())
    ){
    alert('YOU WIN!');
  }
}



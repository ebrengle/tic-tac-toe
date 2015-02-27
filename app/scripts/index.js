'use strict';
//Firebase URL
//var fb = new Firebase('https://tic-tac-toe-app.firebaseio.com/');
var firstPlayer,
    secondPlayer,
    playerName,
    win           = 0;


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
  changePlayer();
  checkWinner();


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
//function logVal() {
  //if (($('#A1').text() === $('#A2').text() && $('#A1').text() === $('#A3').text())
    //){
    //alert('YOU WIN!');
  //}
//}
var a1; // cell 0 (left cell in top row)
var a2; // cell 1
var a3; // cell 2
var b1; // cell 3 (left cell in middle row)
var b2; // cell 4
var b3; // cell 5
var c1; // cell 6 (left cell in bottom row)
var c2; // cell 7
var c3; // cell 8


function boardCheck() {
    a1 = $('#A1').text();
    a2 = $('#A2').text();
    a3 = $('#A3').text();
    b1 = $('#B1').text();
    b2 = $('#B2').text();
    b3 = $('#B3').text();
    c1 = $('#C1').text();
    c2 = $('#C2').text();
    c3 = $('#C3').text();
};


function checkWinner(){
  boardCheck();
  // Checks to see if firstPlayer wins
    if ((a1 == a2 && a1 == a3 && (a1 == firstPlayer)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == firstPlayer)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == firstPlayer)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == firstPlayer)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == firstPlayer)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == firstPlayer)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == firstPlayer)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == firstPlayer)) //diagonal 2
    )
      alert('YOU');
  // Checks to see if secondPlayer wins
    else if ((a1 == a2 && a1 == a3 && (a1 == secondPlayer)) || //first row
    (b1 == b2 && b1 == b3 && (b1 == secondPlayer)) || //second row
    (c1 == c2 && c1 == c3 && (c1 == secondPlayer)) || //third row
    (a1 == b1 && a1 == c1 && (a1 == secondPlayer)) || //first column
    (a2 == b2 && a2 == c2 && (a2 == secondPlayer)) || //second column
    (a3 == b3 && a3 == c3 && (a3 == secondPlayer)) || //third column
    (a1 == b2 && a1 == c3 && (a1 == secondPlayer)) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == secondPlayer)) //diagonal 2
    ){ p2Win = true;
      $('.message').append($('<h1>BURRITOS FOR THE WIN!</h1>')); 
      //$('table').empty();
      $('.title').hide();
      $('.start').show(); }
  }



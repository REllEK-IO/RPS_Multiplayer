var database = firebase.database();

// var player = function(id){
// 	//1 || 2 || 3 if 3 all players are taken;
// 	this.playerID = id;
// 	this.name = null;
// 	this.currentMove = null;
// 	this.wins = 0;
// 	this.rockPaperScissors = null;

// 	this.setName = function(nm){
// 		if(nm != "" || nm != null nm != undefined){
// 			this.name = nm;
// 		}
// 		else{
// 			this.name = "Skippy";
// 		}
// 	}
// }

// var game = function(){
// 	this.rock = false;
// 	this.paper = false;
// 	this.scissors = false;
// }

var reset = function(){
	playerOneSymbol = getSymbol($("player-one").attr("choice"));
	playerTwoSymbol = getSymbol($("player-two").attr("choice"));

	console.log("Reset: " + playerOneSymbol + " " + playerTwoSymbol);

	var timer = setTimeout(function(){
		$("#player-one").attr("choice", "");
		$("#player-one").removeClass(playerOneSymbol);
		$("#player-one").children().addClass("fa-question-circle-o");
		
		$("#player-two").attr("choice", "");
		$("#player-two").removeClass(playerTwoSymbol);
		$("#player-two").children().addClass("fa-question-circle");
	}, 5000);
}

var winCondition = function(){
	playerOne = $("#player-one").attr("choice");
	playerTwo = $("#player-two").attr("choice");
	
	if(playerOne !== "" && playerTwo !== ""){
		if(playerOne === "rock" && playerTwo === "rock")
		{
			console.log("Tie!");
			reset();
		}
		else if(playerOne === "rock" && playerTwo === "paper")
		{
			console.log("Player Two Wins!");
			reset();
		}
		else if(playerOne === "rock" && playerTwo === "scissors")
		{
			console.log("Player One Wins!");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "rock")
		{
			console.log("Player One Wins!");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "paper")
		{
			console.log("Tie!");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "scissors")
		{
			console.log("Player Two Wins!");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "rock")
		{
			console.log("Player Two Wins!");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "paper")
		{
			console.log("Player One Wins!");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "scissors")
		{
			console.log("Tie!");
			reset();
		}
	}
	else{
		console.log("Conditions not met.");
	}
}

var getSymbol = function(hand){
	if(hand === "rock"){
		return "fa-hand-rock-o";
	}
	else if(hand === "paper"){
		return "fa-hand-paper-o";
	}
	else if(hand === "scissors"){
		return "fa-hand-scissors-o";
	}
	else{
		return "";
	}
}

var testLogic = function(hand){
	var userChoice = hand;
	if($("#player-one").attr("choice") === "" && $("#player-two").attr("choice") === ""){
		$("#player-one").attr("choice", userChoice);
		$("#player-one").children().removeClass("fa-question-circle-o");
		$("#player-one").children().addClass(getSymbol(userChoice));
	}
	else if($("#player-one").attr("choice") !== "" && $("#player-two").attr("choice") === ""){
		$("#player-two").attr("choice", userChoice);
		$("#player-two").children().removeClass("fa-question-circle");
		$("#player-two").children().addClass(getSymbol(userChoice));
	}
	winCondition();
}

$(document).ready(function(){
	//var thisGame = game();

	$("#rock").click(function(){
		testLogic("rock");
	});
	$("#paper").click(function(){
		testLogic("paper");
	});
	$("#scissors").click(function(){
		testLogic("scissors");
	});
});
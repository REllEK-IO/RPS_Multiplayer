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

var printResult = function(message, color){
	$("#result").html(message);
	$("#result").addClass(color);
}

var reset = function(){
	playerOneSymbol = getSymbol($("player-one").attr("choice"));
	playerTwoSymbol = getSymbol($("player-two").attr("choice"));


	console.log("Reset: " + playerOneSymbol + " " + playerTwoSymbol);
	var intervalCount = 3;

	$("#versus").html(intervalCount);

	var interval = setInterval(function(){
		intervalCount--;
		$("#versus").html(intervalCount);
	}, 1000);

	var timer = setTimeout(function(){
		printResult("");
		clearInterval(interval);
		$("#versus").html("VS");
		$("#result").removeClass();

		$("#player-one").attr("choice", "");
		$("#player-one").children().removeClass();
		$("#player-one").children().addClass("fa fa-question-circle-o fa-lg");
		
		$("#player-two").attr("choice", "");
		$("#player-two").children().removeClass();
		$("#player-two").children().addClass("fa fa-question-circle fa-lg");
	}, 3000);
}

var winCondition = function(){
	playerOne = $("#player-one").attr("choice");
	playerTwo = $("#player-two").attr("choice");
	
	if(playerOne !== "" && playerTwo !== ""){
		if(playerOne === "rock" && playerTwo === "rock")
		{
			printResult("Tie!" , "teal");
			reset();
		}
		else if(playerOne === "rock" && playerTwo === "paper")
		{
			printResult("Player Two Wins!", "blue");
			reset();
		}
		else if(playerOne === "rock" && playerTwo === "scissors")
		{
			printResult("Player One Wins!", "red");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "rock")
		{
			printResult("Player One Wins!", "red");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "paper")
		{
			printResult("Tie!", "teal");
			reset();
		}
		else if(playerOne === "paper" && playerTwo === "scissors")
		{
			printResult("Player Two Wins!", "blue");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "rock")
		{
			printResult("Player Two Wins!", "blue");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "paper")
		{
			printResult("Player One Wins!", "red");
			reset();
		}
		else if(playerOne === "scissors" && playerTwo === "scissors")
		{
			printResult("Tie!", "teal");
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
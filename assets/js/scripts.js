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

		buttonsInit();

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

var rockPaperScissors = function(){
	var playerOneChoice = $("#player-one").attr("choice");
	var playerTwoChoice = $("#player-two").attr("choice");

	if(playerOneChoice !== "" && playerTwoChoice !== ""){

		buttonsClear();

		var rps = ["Rock...", "Paper...", "Scissors...", "Shoot!!!"];
		var rpsColor = ["blue", "teal", "red", "black"];
		var i = 0;

		$("#versus").html(rps[i]);
		$("#versus").addClass(rpsColor[i]);
		var rpsInterval = setInterval(function(){
			i++;
			$("#versus").html(rps[i]);
			$("#versus").removeClass();
			$("#versus").addClass(rpsColor[i]);
		}, 1000);

		var showTimer = setTimeout(function(){
			$("#versus").removeClass();
			clearInterval(rpsInterval);
			winCondition();
			$("#player-one").children().removeClass("fa-question-circle-o");
			$("#player-one").children().addClass(getSymbol(playerOneChoice));
			$("#player-two").children().removeClass("fa-question-circle");
			$("#player-two").children().addClass(getSymbol(playerTwoChoice));
		}, 4000);
	}
}

var testLogic = function(hand){
	var userChoice = hand;
	if($("#player-one").attr("choice") === "" && $("#player-two").attr("choice") === ""){
		$("#player-one").attr("choice", userChoice);
	}
	else if($("#player-one").attr("choice") !== "" && $("#player-two").attr("choice") === ""){
		$("#player-two").attr("choice", userChoice);
		rockPaperScissors();
	}
}

var buttonsInit = function(){
	$("#rock").click(function(){
		testLogic("rock");
	});
	$("#rock").removeClass("silverbg");

	$("#paper").click(function(){
		testLogic("paper");
	});
	$("#paper").removeClass("silverbg");

	$("#scissors").click(function(){
		testLogic("scissors");
	});
	$("#scissors").removeClass("silverbg");
}

var buttonsClear = function(){
	$("#rock").off();
	$("#rock").addClass("silverbg");
	$("#paper").off();
	$("#paper").addClass("silverbg");
	$("#scissors").off();
	$("#scissors").addClass("silverbg");
}

$(document).ready(function(){
	
	buttonsInit();

});
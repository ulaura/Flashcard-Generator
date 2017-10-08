//the constructor BasicCard
function BasicCard(front, back) {
	
	//making the constructor scope-safe so new objects don't need the keyword "new" before BasicCard
	if (this instanceof BasicCard) {
		//the front of the flashcard
		this.front = front;

		//the back of the flashcard
		this.back = back;
	}

	else {
		return new BasicCard(front, back);
	};

	//module to show front of the flashcard
	this.showFront = function () {
		console.log(this.front);
	};

	//module to show back of flashcard
	this.showBack = function () {
		console.log(this.back);
	};

	//module to ask a question 
	this.askQuestion = function () {
		console.log("Question: " + this.front);
		console.log("");
		this.answerQuestion();
	};

	//module to answer a question. works in this.askQuestion above
	this.answerQuestion = function () {
		console.log("Answer: " + this.back);
	}
};


//bringing in dependency inquirer npm package
var inquirer = require("inquirer");

//the function to allow users to build their own basic card
function buildCard() {
	console.log("Create your own basic flashcard!");
	console.log("");

	//ask the user what they want on as questions/answers on their flashcards
	inquirer.prompt([
		{
			type: "input",
			name: "front",
			message: "What would you like on the front of your flashcard (Your question)?"
		},
		{
			type: "input",
			name: "back",
			message: "What would you like on the back of your flashcard (Your answer)?"
		}

	])
	.then(function(answers) {
		//takes the user's answers and builds a new BasicCard object under variale newCard
		var newCard = BasicCard (
			answers.front,
			answers.back
		);

		console.log("\nHere is your new card:");

		//From the module in the constructor. runs through showing the question/answer of the card. 
		newCard.askQuestion();
	});
};

buildCard();


//the export (for future use)
module.exports = BasicCard;
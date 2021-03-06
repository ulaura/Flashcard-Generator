//the constructor ClozeCard
function ClozeCard(text, cloze) {

	//making the constructor scope-safe so new objects don't need the keyword "new" before ClozeCard
	if (this instanceof ClozeCard) {
		//the text, should be the full text
		this.text = text;

		//the part of the text that's cloze-deleted
		this.cloze = cloze;
	}

	else {
		return new ClozeCard(text, cloze);
	};

	//module to check if cloze-deletion works before running this.partial()
	this.errorCheck = function() {
		var isHere = this.text.indexOf(this.cloze);

		//if this.cloze does not exist in (doesn't match a part of) this.text, the error message will print
		if (isHere === -1) {
			return console.log("\nError: Your cloze-deletion is not present in the full text of your flashcard.");
		}
		else {
			//if this.cloze does exist in this.tex, run this.partial();
			console.log("\nHere is your new card:");
			this.partial();
		}
	};
	
	//module to show partial text
	this.partial = function() {
		//first splits this.text into an array of values, separated at this.cloze.
		//Here the array will only have 1 value: the full text without this.cloze
		//then .pop() removes and returns last (in this case, the only) value in the array
		var partial = this.text.split(this.cloze).pop();
		console.log("Fill in the blank: ..." + partial);
		console.log("");
		this.fullText();
	};


	//module to show this.text only if this.cloze is present in this.text
	//works with this.partial()
	this.fullText = function() {
		//if this.cloze exists in (matches part of) this.text, this.text will print
		console.log("The Answer: " + this.text);

	};


};


//bringing in dependency inquirer npm package
var inquirer = require("inquirer");

//the function to allow users to build their own cloze-deletion card
function buildCard() {
	console.log("Create your own cloze-deletion flashcard!");
	console.log("");

	//ask the user what they want on as questions/answers on their flashcards
	inquirer.prompt([
		{
			type: "input",
			name: "text",
			message: "What would you like the FULL text of your flashcard to say?"
		},
		{
			type: "input",
			name: "cloze",
			message: "What would you like the cloze-deletion part of your flashcard to say?"
		}

	])
	.then(function(answers) {
		//takes the user's answers and builds a new ClozeCard object under variale newCard
		var newCard = ClozeCard (
			answers.text,
			answers.cloze
		);

	
		//From the module in the constructor. runs through showing the question/answer of the card. 
		newCard.errorCheck();


	});
};

buildCard();


//export for future use
module.exports = ClozeCard;
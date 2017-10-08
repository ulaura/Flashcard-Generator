//bringing in dependency inquirer npm package
var inquirer = require("inquirer");

//ask the user what kind of card they want to make
inquirer.prompt([
	{
		type: "list",
		name: "cardType",
		message: "What kind of flashcard would you like to make?",
		choices: ["Basic flashcard", "Cloze-deletion flashcard"]
	}

])
.then(function(answers) {
	console.log(answers);

	if (answers.cardType === "Basic flashcard") {
		//taking export from BasicCard.js
		var BasicCard = require("./BasicCard.js");
		BasicCard.BasicCard;	
	}
	else if (answers.cardType === "Cloze-deletion flashcard") {
		//taking export from ClozeCard.js
		var ClozeCard = require("./ClozeCard.js");
		ClozeCard.ClozeCard;
	}	
	
});



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
		var isHere = this.text.indexOf(this.cloze);

		//if this.cloze does not exist in (doesn't match a part of) this.text, the error message will print
		if (isHere === -1) {
			console.log("You have an error in your constructor.");
		}

		//if this.cloze exists in (matches part of) this.text, this.text will print
		else {
			console.log("The Answer: " + this.text);
		}
	};
};


//the new objects based on constructor ClozeCard.
//note to self: for the cloze parameter, I added a space a the end so that .split() removes the space when this.partial is run.
var firstPresident = 	ClozeCard("George Washington was the first president of the United States.", "George Washington ");
var firstOnMoon = 		ClozeCard("Neil Armstrong was the first person on the moon.", "Neil Armstrong ");
var cheeseState = 		ClozeCard("Wisconsin is a US state known for its cheese.", "Wisconsin ");
var largestAnimal = 	ClozeCard("The blue whale is the largest animal on Earth.", "The blue whale ");
var arizonaState = 		ClozeCard("1912 was the year Arizona became a state.", "1912 ");
var testNoNew =			ClozeCard("Scope-safe constructors allow users to make new objects without using the keyword 'new'.", "Scope-safe constructors ")
//var brokenCloze = 		new ClozeCard("This should not work.", "The test.");


//an array to store the ClozeCard objects. testNoNew does NOT go in here
var quizArray = [firstPresident, firstOnMoon, cheeseState, largestAnimal, arizonaState];

//======================= The Calls ========================

//firstPresident.partial(); 	//test
//firstPresident.fullText(); 	//test
//brokenCloze.fullText(); 		//test
//testNoNew.partial();			//test


//the command after "node ClozeCard.js" to run this file will be "quiz"
//these if/else-if statements below check against various entries
//note to self: the order these are written in matters!!


//if user doesn't enter a command
if (!process.argv[2]) {
	console.log("Please type in <<quiz>> (without the carrots) after calling the app.");
}

//if user doesn't enter "quiz" as the command
else if (process.argv[2].toLowerCase() !== "quiz") {
	console.log("Please type in <<quiz>> (without the carrots) after calling the app.");
}

//if user correctly enters "quiz" as the command
else if (process.argv[2].toLowerCase() === "quiz") {
	//randomly selects an object from questionArray and stores it in chosenQuestion
	var chosenQuiz = quizArray[Math.floor(Math.random() * quizArray.length)];

	//executes function with randomly selected object from quizArray
	chosenQuiz.partial();
}

//The necessary "else" to make if/else-if work
else {
	console.log("You have an error.");
};


//export for future use
module.exports = ClozeCard;
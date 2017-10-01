//the constructor BasicCard
function BasicCard(front, back) {
	//the front of the flashcard
	this.front = front;

	//the back of the flashcard
	this.back = back;

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


//the new objects based off of constructor BasicCard
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var firstOnMoon = new BasicCard("Who was the first person on the moon?", "Neil Armstrong");
var cheeseState = new BasicCard("What US state is known for its cheese?", "Wisconsin");
var largestAnimal = new BasicCard("What is the largest animal on Earth?", "The blue whale");
var arizonaState = new BasicCard("What year did Arizona become a state?", "1912");


//an array to store the BasicCard objects
var questionArray = [firstPresident, firstOnMoon, cheeseState, largestAnimal, arizonaState];



//================== the calls =================== 

//firstPresident.showFront(); //test
//firstPresident.showBack();  //test


//the command after "node BasicCard.js" to run this file will be "ask"
//these if/else-if statements below check against various entries
//note to self: the order these are written in matters!!

//if user doesn't enter a command
if (!process.argv[2]) {
	console.log("Please type in <<ask>> (without the carrots) after calling the app.");
}

//if user doesn't enter "ask" as the command
else if (process.argv[2].toLowerCase() !== "ask") {
	console.log("Please type in <<ask>> (without the carrots) after calling the app.");
}

//if user correctly enters "ask" as the command
else if (process.argv[2].toLowerCase() === "ask") {
	//randomly selects an object from questionArray and stores it in chosenQuestion
	var chosenQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

	//executes function with randomly selected object from questionArray
	chosenQuestion.askQuestion();
}

//The necessary "else" to make if/else-if work
else {
	console.log("You have an error.");
};


//the export (for future use)
module.exports = BasicCard;
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
};


//the new objects based off BasicCard
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington")


//the export
module.exports = BasicCard;


//the calls
firstPresident.showFront();
firstPresident.showBack();
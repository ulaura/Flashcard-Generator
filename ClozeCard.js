//the constructor ClozeCard
function ClozeCard(text, cloze) {
	//the text
	this.text = text;

	//the part of the text that's cloze-deleted
	this.cloze = cloze;

	this.partial = function() {
		var test = this.text.split(this.cloze).pop();
		console.log("..." + test);

	}
};



var firstPresident = new ClozeCard("George Washington was the first president of the United States.", "George Washington ");


firstPresident.partial();









//export for future use
module.exports = ClozeCard;
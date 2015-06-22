
function Entry (title, content, author){
	this.title = title;
	this.content = content; 
	this.author = author;
}
 
function Journal() {
	
	this.journalArray = {}

	this.enterFeelings = function(date,entry){

		//think journalEntry[date] = function(entry);
 		this.journalArray.push(entry);
	};
    
    this.getFeelings = function(entryIndex){
        return this.journalArray[entryIndex];
    }
}




var __journal = new Journal();
var friday = new Entry ("I Like Friday ", "Today is the bestest day of the week ", "Lindsay");
var saturday = new Entry ("I Like Saturday ", "Today is the laziest day of the week ", "Lindsay");
__journal.enterFeelings(friday);
__journal.enterFeelings(saturday);


console.log(__journal.journalArray)
console.log(__journal.getFeelings(1));
console.log(__journal.getFeelings(2));
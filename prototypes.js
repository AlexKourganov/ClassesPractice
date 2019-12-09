// Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    
}
// Get summary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
// Get age
Book.prototype.getAge = function(){
const year = new Date().getFullYear() - this.year;
return `${this.title} is ${year} years old`;
};
// Revise
Book.prototype.revise = function(newYear){
this.year = newYear;
this.revised = true;
};



// Instantiatiate an object
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'John Doe 2', '1800');

// console.log(book2.getAge());
console.log(book2);
book2.revise('2015');
console.log(book2);
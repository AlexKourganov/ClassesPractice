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
// Magazine constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
};
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
// use mag constructor
Magazine.prototype.constructor = Magazine;
// Init mag
const mag1 = new Magazine('Mag one', 'John Doe', '2017', 'Jul');



console.log(mag1.getSummary());
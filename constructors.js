// Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiatiate an object
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'John Doe 2', '2019');

console.log(book2.getSummary());
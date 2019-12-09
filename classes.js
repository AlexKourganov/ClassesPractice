class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'barnes and nobles';
    }
}
// Instantiate object
const book1 = new Book('Book 1', 'zar', '2020');
console.log(book1);
book1.revise('2000');
console.log(book1);
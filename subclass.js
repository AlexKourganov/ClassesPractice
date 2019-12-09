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

   
}

// Magazine subclass
class Magazine extends  Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}
// Init mag
const mag1 = new Magazine('mag one' , 'John', '2020', 'jul');
console.log(mag1.getSummary());
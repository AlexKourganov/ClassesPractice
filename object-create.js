//Object of protos
const bookProtos = {
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }
}

// Create object
const book1 = Object.create(bookProtos);
book1.title = 'Book 1';
book1.author = 'John Shmoe';
book1.year = '2020';

const book2 = Object.create(bookProtos , {
    title:{value:'Book Two'},
    author:{value:'Zaa'},
    year:{value:'2015'}
});
console.log(book2);
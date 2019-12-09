// const s1 = 'hello';
// console.log(typeof s1);
// const s2 = new String('hello');
// console.log(typeof s2);

//Parent object of everthing
// console.log(window);

//object literal
const book1 = {
    title:'Book 1',
    author: 'John Doe',
    year:'1988',

    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1);
console.log(book1.getSummary());
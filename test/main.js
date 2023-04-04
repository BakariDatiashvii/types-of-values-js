//number
const numb1 = 42; //ინტეჯერი
const numb2 = 3.14; // არამთელი რიცხვები
console.log(numb1,numb2);
// string
const srt1 = "Hello"; //ორმაგი ბრჭალები
const str2 = 'world'; //ერთმაგ ბრჭალებში
console.log(srt1,str2);
//booleans
const bool1 = true; // ჭეშმარიტ მნიშვნელობას
const bool2 = false; // მცდარ მნიშვნელობას
console.log(bool1,bool2);
// Null
const nullValue = null; // არ არსებობს
console.log(nullValue);
// Undefind 
let underfindValue; // არ არის განსაზღვრული
// objects
const person = {
    name: "John",
    age: 22,
    city: "Tbilisi"
}
console.log(person.city)
// arrays
const numbers =[1,2,3,4,5];
const fruits =["apple", "banana", "orange"];
console.log(numbers[3]);                
console.log(fruits[0]);                 
//functions
function sayHello(name){
    console.log("Hello " + name)
}
sayHello("John");
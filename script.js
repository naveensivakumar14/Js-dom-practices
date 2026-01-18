


//Destrcturing

let user = {
    name: "Steven",
    age: 30,
    city: "Boston",
    work: "Engineer"
};

console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.work);

let {name, age, city, work} = user; //destructuring

console.log(name);
console.log(age);
console.log(city);
console.log(work);
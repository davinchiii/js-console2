//Assignment 1
//Array
const workers=[
    {firstName:"Vanessa", lastName:"Rogers",salary: 60193,age:19,Gender:"Female"},
    {firstName:"Charlotte",lastName:"Hunt",salary: 92383,age:24 ,Gender:"Female" },
    {firstName:"Marcus",lastName:"Foster",salary: 658760,age:21 ,Gender:"Male"},
    {firstName:"Myra",lastName:"Brooks",salary: 174036,age:21 ,Gender:"Female"},
    {firstName:"Caroline",lastName:"Armstrong",salary: 149879,age:29 ,Gender:"Female"},
    {firstName:"Belinda",lastName:"Carroll",salary: 188935,age:19 ,Gender:"Female"},
    {firstName:"Olivia",lastName:"Armstrong",salary: 34782,age:26 ,Gender:"Female"},
    {firstName:"April",lastName:"Cooper",salary:68263,age:20 ,Gender:"Female"},
    {firstName:"Edith",lastName:"Harrison",salary: 548709,age:23 ,Gender:"Female"},
    {firstName:"Vivian",lastName:"Henderson",salary: 155709,age:20 ,Gender:"Female"},
    {firstName:"Ashton",lastName:"Martin",salary:166647 ,age:27 ,Gender:"Male"},
    {firstName:"Gianna",lastName:"Moore",salary: 191619,age:23 ,Gender:"Female"},
    {firstName:"Camilia",lastName:"Allen",salary: 85567,age:23 ,Gender:"Female"},
    {firstName:"Gianna",lastName:"Morrison",salary: 191509,age:28 ,Gender:"Female"},
    {firstName:"Paul",lastName:"Cooper",salary: 394871,age: 28,Gender:"Male"},
    {firstName:"Tara",lastName:"Mason",salary: 189780,age:19 ,Gender:"Female"},
    {firstName:"Aida",lastName:"Tucker",salary: 143187,age:21 ,Gender:"Female"},
    {firstName:"Richard",lastName:"Cameron",salary: 116644,age:21 ,Gender:"Male"},
    {firstName:"Amy",lastName:"Stewart",salary: 126961,age:29 ,Gender:"Female"},
    {firstName:"Eleanor",lastName:"Thompson",salary: 159003,age:22 ,Gender:"Female"},
    {firstName:"Albert",lastName:"Edwards",salary: 105648,age:21 ,Gender:"Female"},
    {firstName:"Gianna",lastName:"Evans",salary: 183805,age:27 ,Gender:"Female"},
    {firstName:"Florrie",lastName:"Kelley",salary: 180568,age: 24 ,Gender:"Female"},
    {firstName:"Miranda",lastName:"Harris",salary: 185753,age:19 ,Gender:"Female"},
    {firstName:"Henry",lastName:"Davis",salary: 83804,age:18 ,Gender:"Male"},
    {firstName:"Kirsten",lastName:"Barnes",salary: 161833,age:26 ,Gender:"Female"},
    {firstName:"Jack",lastName:"Chapman",salary: 41007,age:19 ,Gender:"Male"},
    {firstName:"Myra",lastName:"Kelly",salary: 118346,age:27 ,Gender:"Female"},
    {firstName:"Emma",lastName:"Evans",salary: 126125,age:23 ,Gender:"Female"},
    {firstName:"Blake",lastName:"Evans",salary: 69702,age:24 ,Gender:"Male"},
    {firstName:"Aldus",lastName:"Armstrong",salary: 132491,age:26 ,Gender:"Male"},
    {firstName:"Adelaide",lastName:"Martin",salary: 175263,age:20 ,Gender:"Female"},
    {firstName:"Victoria",lastName:"Elliot",salary: 111645,age:21 ,Gender:"Female"},
    {firstName:"Nicole",lastName:"Harrison",salary: 54624,age:22 ,Gender:"Female"},
    {firstName:"Edwin",lastName:"Hamilton",salary: 152586,age:18 ,Gender:"Male"},
    {firstName:"Jessica",lastName:"Robinson",salary: 85446,age:29 ,Gender:"Female"},
    {firstName:"Sofia",lastName:"Turner",salary: 131564,age:20 ,Gender:"Female"},
    {firstName:"Cadie",lastName:"Higgins",salary: 138663,age:21 ,Gender:"Female"},
    {firstName:"Jessica",lastName:"Turner",salary: 91319,age: 24,Gender:"Female"},
    {firstName:"Walter",lastName:"Hamilton",salary: 117408,age:25 ,Gender:"Male"},
    {firstName:"Alexander",lastName:"Farrell",salary: 65878,age:26 ,Gender:"Male"},
    {firstName:"Justin",lastName:"Howard",salary: 165575,age:21 ,Gender:"Male"},
    {firstName:"Chelsea",lastName:"Holmes",salary: 32690,age:21 ,Gender:"Female"},
    {firstName:"Alberta",lastName:"Wilson",salary: 143459,age:22 ,Gender:"Female"},
    {firstName:"Miller",lastName:"Murphy",salary:163776 ,age:25,Gender:"Male"},
    {firstName:"Adrianna",lastName:"Hawkins",salary: 64412,age: 23,Gender:"Female"},
    {firstName:"Dominik",lastName:"Reed",salary: 42643,age: 23,Gender:"Male"},
    {firstName:"Gianna",lastName:"Craig",salary: 141944,age: 18,Gender:"Female"},
    {firstName:"Alissa",lastName:"Cameron",salary: 101581,age: 28,Gender:"Female"},
    {firstName:"Aldus",lastName:"Adams",salary: 132894,age:28 ,Gender:"Male"},
];
// Using forEach() to iterate over arrays
console.log("First and Last name of all workers".toUpperCase());
const worker =workers.forEach((worker)=>{
   let fullName = `${worker.firstName}  ${worker.lastName}`;
   console.log(fullName);
});

//Using reduce() to log Total Salary of workers
console.log("Total Salary Of workers".toUpperCase());
 const sumSalary = (total, workers) => {
    return total + workers.salary;
}
const totalSalary = workers.reduce( sumSalary, 0 );
console.log(totalSalary);

//Average Age of workers Using reduce
console.log("Average Age Of All workers".toUpperCase());
const averageAge = (average, workers) => {
    return average + workers.age;
}
const Ageaverage = workers.reduce( averageAge, 0 )/workers.length;
console.log(Ageaverage);

//Array Of workers above 30
console.log(" Array Of Workers above 30".toUpperCase());
const Abovethirty = (workerAbove) => { return workerAbove.age > 30; } 
const thirtyAbove = workers.filter(Abovethirty);
console.log(thirtyAbove);

// Double the Salaries of workers
console.log(" Doubled Salaries Of all workers".toUpperCase());
const double = (worker)=>{return worker.salary*2};
const Sal = workers.map(double).forEach((sal)=>{ console.log(sal);})

//Assignment Two
console.log(" ");
console.log(" Assignment two".toUpperCase());

//Array as a parameter
console.log("Array as parameter".toUpperCase());
 const arr=[1,2,3,4,5];
 const arrParam=(arr)=>{console.log(`first element: ${arr[0]} , last element :${arr[4]}`)}
arrParam(arr);

//object as a parameter
console.log("Object as parameter ".toUpperCase());
const workerObj= {firstName:"Aida",lastName:"Tucker",salary: 143187,age:21 ,Gender:"Female"};
const workerParam=(worker)=>{console.log(`Your name is ${workerObj.firstName} ${workerObj.lastName} you are a ${workerObj.Gender} and ${workerObj.age} year old ,your current salary is ${workerObj.salary} ` )}
workerParam(worker);

//Name and score function 
console.log(" Name and score function ".toUpperCase());
console.log("code was returned( view in editor.....)")
const nameScore =(name,score)=>{ return `Hello ${name}, your score is ${score} `}; nameScore("Bayo", 3000);
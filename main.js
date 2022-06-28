var count = 0;
var arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(num=>{console.log(num)});
arr.reverse().forEach(num=>{console.log(num)});

const fruit = ["banana", "orange", "apple", "kiwi"]

fruit.forEach(fruit=>{console.log(fruit)});

var arr2=[];

for(let i=0;i<10;i++){
    arr2.push(i);
}
console.log(arr2)

var arr3 =[];

for(let i=0;i<101;i++){
    if(i%2==0){
        arr3.push(i);
    }
}
console.log(arr3)

var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var arr4 =[];

for(let i=0;i<fruit2.length;i++){
    if(i%2==0){
        arr4.push(fruit2[i]);
    }
}
console.log(arr4)

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
  
peopleArray.forEach(person=>{console.log(person.name)}) 
var names = [];
var occupations = [];
peopleArray.forEach(person=>{
    names.push(person.name);
    occupations.push(person.occupation);
}) ;
console.log(names, occupations)
names = [];
occupations = [];

for(let i=0;i<peopleArray.length;i++){
    if(i%2==0){
        names.push(peopleArray[i].name);
    }else{
        occupations.push(peopleArray[i].occupation);
    }
}
console.log(names, occupations)

var grid = [];


for(let a=0;a<3;a++){
    let arr = [];
    for(let b=0;b<3;b++){
        arr.push(b);
    }
    grid.push(arr);
}

console.log(grid)

for(let a=0;a<grid.length;a++){
    for(let b=0;b<grid[a].length;b++){
        grid[a][b] = 'x';
    }
}
console.log(grid)
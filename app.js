// Hoisting
name = "Jessie";
var name;
// let name;
console.log(name);

setName();
function setName() {
    var name = "Covalence";
    console.log(name);
}

console.log("Some");
let avg = findAverage(2, 2);
console.log("Text");
function findAverage(a, b) {
    console.log("Some text");
    var answer = (a + b) / 2;
    return answer;
}

// Scoping
let fruits = ["apple", "tomato", "banana"];
// let favFruit;

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    function printFavFruit() {
        let leastFav = fruits[1];
        console.log(favFruit);
    }
    printFavFruit();
    // console.log(leastFav);
}

printFruits();

someFunc();
function someFunc() {
    console.log("Hello, Jessie");
}


let func = function() {
    alert("This is an alert!");
}
func();
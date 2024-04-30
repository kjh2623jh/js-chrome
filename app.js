let a = 5;

console.log(5+2);
console.log(5*2);
console.log(5/2);

console.log(a);

a = 3;

console.log(a);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[3]);

daysOfWeek.push("sun")

function sayHello(name, age) {
    console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello("Kim", 10);

/*
const player = {
    name: "jihun",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    }
}

player.sayHello("lynn");
*/

// ?? ; 없어도 잘 작동함.
const toBuy = ["potato", "tomato", "pizza"]
console.log(toBuy);
// const된 toBuy를 건드는 것이 아닌 toBuy의 object를 건드는 것이라 가능함.
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat")
console.log(toBuy);


const player = {
    name: "kim",
    age: 10,
};
player.name = "ji";
console.log(player, console);
player.sexy = "soon";
console.log(player);


function minusFive(potato) {
    console.log(potato - 5);
}
// argument 값이 여러개 들어가도 받을 수 있는 것 까지만 받음.
minusFive(5, 19, 1, 2, 39, 245, 4657);

const calculator = {
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    },
    div: function(a, b) {
        return a/b;
    },
    power: function(a, b) {
        return a**b;
    }
};
console.log(calculator.add(1, 2));
console.log(calculator.power(2, 4));

// prompt는 더이상 안쓰는 코드이긴 함.
const age = prompt("How old are you?");
console.log(parseInt(age)); // string ==> NaN(Not a Number)
if (isNaN(parseInt(age))) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
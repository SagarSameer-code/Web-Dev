// (1) Function that returns grade based on marks using if/else. //
function getgrade(marks) {
    if (marks >= 90) {
        return "A+";
    } 
    else if (marks >= 80) {
        return "A";
    } 
    else if (marks >= 70) {
        return "B";
    } 
    else if (marks >= 60) {
        return "C";
    } 
    else if (marks >= 50) {
        return "D";
    } 
    else {
        return "Fail";
    }
}

console.log(getgrade(56)); 

// (2) Loop that prints numbers 1–50, but prints “even” for even numbers. //

for(let i = 1; i <=50 ; i++) {
    if (i%2==0){
        console.log("Even")
    }
    else
    {
        console.log(i)
    }
}

// (3) given an array of numbers, return a new array of only even numbers using filter. //

function getEvenNumbers(arr) {
    return arr.filter(function (num) {
        return num % 2 === 0;
    });
}
console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// (4)  Object task: create an object student with name, age, skills (array). Add a new skill using dot notation. //

let student = {
    name: "Sagar",
    age: 19,
    skills: ["HTML", "CSS", "JavaScript"]
}
student.skills.push("React");

console.log(student);

// (5) • Write a loop to print all keys and values of the object. //

let details = {
    name: "Sagar",
    age: 19,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

for (let key in details) {
    console.log(key + " : " + details[key]);
}





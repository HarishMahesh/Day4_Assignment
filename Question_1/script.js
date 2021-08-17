/* 1. How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" }; */


var obj1 = { name: "Person", age:5 };
var obj2 = { age:5, name: "Person 1" };

let flag = true;
for (key in obj1)
{
    if (obj1[key] !== obj2[key])
    {
        flag = false;
        break;
    }
}

if (flag)
console.log('both the objects are same');
else
console.log('both are different');

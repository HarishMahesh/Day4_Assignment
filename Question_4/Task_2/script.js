// Task 2: Simple Programs todo for Operators

// 1. Square of a number

function square(num)
{
    return num*num;
}

// 2. Swapping 2 numbers

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a,b);

// 3.Addition of 3 numbers

function addThreeNum(num1,num2,num3)
{
    return num1 + num2 + num3;
}

// 4.Celsius to Fahrenheit conversion

function toFahrenheit(Celsius)
{
    let Fahrenheit = (Celsius * 9/5) + 32
    return Fahrenheit;
}

// 5. Meter to miles

function toMiles(meter)
{
    let miles = meter * 0.000621;
    return miles;
}

// 6. Pounds to kg

function toKilogram(ponds)
{
    let kg = ponds * 0.45359237;
    return kg;
}

// 7. Calculate Batting Average

function battingAvg(totalRuns,noOfNotOuts)
{
    let avg = totalRuns/noOfNotOuts;
    return avg;
}

// 8. Calculate five test scores and print their average

function testAvg(score1,score2,score3,score4,score5)
{
    let totalRuns = score1 + score2 + score3 + score4 + score5;
    let avg = totalRuns/5;
    return avg;
}

// 9. Power of any number x ^ y.

let x = 10;
let y = 4;

console.log(Math.pow(x,y));

// 10. Calculate Simple Interest

function simpleInterest(principal,rate,interest)
{
    let si = (principal*rate*interest)/100;
}

// 11. Calculate area of an equilateral triangle

function areaOfEquilateralTriangle(a)
{
    let area = (Math.sqrt(3)/4) * a * a;
    return area;
}

// 12.Area Of Isosceles Triangle

function areaOfIsoTriangle(base,height)
{
    let area = 0.5 * base * height;
    return area;
}

// 13. Volume Of Sphere

function volumeOfSphere(radius)
{
    let vol = (4/3)*3.14*Math.pow(radius,3);
    return vol;
}

// 14.Volume Of Prism

function volumeOfPrism(length,width,height)
{
    let vol = 0.5*length*width*height;
    return vol;
}

// 15.Find area of a triangle.

function areaOfTriangle(side1,side2,side3)
{
    let s = (side1 + side2 + side3)/2;
    let area = Math.sqrt(s*(s - side1)(s - side2)(s - side3));
    return area;
}

// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product

function discount(cp,sp)
{
    let dis = ((cp - sp) * 100)/cp;
    return `${dis} %`;
}

// 17.Given their radius of a circle and find its diameter, circumference and area.

function circleOperations(radius)
{
    let diameter = 2 * radius;
    let circumference = 3.14 * diameter;
    let area = 3.14 * radius * radius;
    return [diameter,circumference,area];
}

// 18.Given two numbers and perform all arithmetic operations.

function allOperations(num1,num2)
{
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let divison = num1/num2;
    let remainder = num1 % num2;
    return [add,sub,mul,divison,remainder];
}

/* 19. Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****  */

let line1 = '*****';
console.log(line1);
console.log(line1);
console.log(line1);
console.log(line1);
console.log(line1);

/* 20. Calculate electricity bill?
For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that 
consumer if per unit rate is 10? */

let rate = 10;
let perdayConsumption = 100;

let totalPowerKwh = 100 * 30 * 0.001;
let cost = totalPowerKwh * 10;
console.log(cost);

// 21. Program To Calculate CGPA

let sub1 = 9;
let sub2 = 8;
let sub3 = 7;
let sub4 = 9;
let sub5 = 10;

let cgpa = (sub1 + sub2 + sub3 + sub4 + sub5)/5;
console.log(cgpa);
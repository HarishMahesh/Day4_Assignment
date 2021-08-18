// Task 3: Simple Programs todo for Condition , Looping and Arrays

/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######  */

for (i = 1 ; i <= 7 ; ++i)
{
    let char = ''
    for (j = 1 ; j <=i ; ++j)
    {
        char += '#';
    }

    console.log(char);
}

/* Iterate through the string array and print it contents
      var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]    */

      var strArray= ["<option>Jazz</option>",
      "<option>Blues</option>",
      "<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"];

      for (element of strArray)
      {
          console.log(element);
      }

/* var myarray=[11,22,33,44,55]
write a code to count the elements in the array . Don’t use length property */


let myarray=[11,22,33,44,55];
let count = 0;
while(myarray[count])
{
    ++count;
}

console.log(`length of array : ${count}`);

/* Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[] */

let foods = [];

foods = ['poori','nan','chapathi','parota','Mutton Briyani','egg briyani','chicken briyani','idly','onion dosa','masal dosa',
'pongal','podi dosa','idiyappam','fired rice','veg briyani','noodels','egg laba','plain dosa','egg dosa','kichedi'];

//  How can you find your fifth favorite food?

console.log(foods[4]);

// Find the length of your foods array

console.log(foods.length);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'Mari')
        {
            input[i] = 'Munnabai';
        }

        return input;
    }
    }
    friends = dataHandling(friends);
    console.log(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends_1 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    function dataHandling1(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === 'CaptianAmerica')
        break;
        else
        console.log(input[i]);
    }
    }
    dataHandling1(friends_1);

// Find the person is ur friend or not.

function dataHandling2(input, name){
    let flag = 'false';
    for (var i = 0; i < input.length; i++) {
        if (input[i] === name)
        {
            flag = true;
            break;
        }
    }
    return flag;
    }
    let found = dataHandling2(friends,'Jeff');
    console.log(found);

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    var friends2 = [
    'Gabbar',
    'Rajinikanth',
    'Mass',
    'Spiderman',
    'Jeff',
    'ET'
    ];
    function dataHandling3(input1,input2){
    //Your code goes here
        let result = [...input1,...input2];
        result.sort();
        return result;

    }
    console.log(dataHandling3(friends1,friends2));

//Get the first item, the middle item and the last item of the array

let a = [1,2,3,4,5,6];

console.log(a[0]);
console.log(a[a.length - 1]);
console.log(a[Math.ceil(a.length/2)]);

// Add your name to the end of the friends array, and add another name to beginning.

let frnd = ['kamali','suve','sai','Madhu'];

frnd.push('kavya');
frnd.unshift('sound');
console.log(frnd);

// Add Mr or Ms to the names in the friends array.

let changedArray = frnd.map((name) => 'Ms.'+name);
console.log(changedArray);

// Concat all the names the friends array and return as comma “,” seperated string.

let combinedNames = frnd.join(',');
console.log(combinedNames);

// Find the friends names who has letter ‘a’ and return the list.


let filteredNames = frnd.filter((name) => {
    if (name.indexOf('a') !== -1)
    return true;
    else
    return false;
});

console.log(filteredNames);

// Find the avg length of all the friends names. Get the individual length of the names and do the avg.

let sum = 0;

for (name of frnd)
{
    sum += name.length;
}

let avg = sum/frnd.length;
console.log(`average length is : ${avg}`);

// Find the names and return the list starting with letter M.

let namesStartsWith_M = frnd.filter((name) => {
    if(name[0].toUpperCase() === 'M')
    return true;
    else
    return false;
});

console.log(namesStartsWith_M);

// Find the name with max characters and return the name.

frnd.sort((a,b) => b.length - a.length);
let nameWithMaxChar = frnd[0];
console.log(nameWithMaxChar,frnd);

// Find the name with min characters and return the name.

let nameWithMinChar = frnd[frnd.length - 1];
console.log(nameWithMinChar);

// Find the average in the array below. Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

let sum1 = 0;
let count1 = 0;
for (element of friendsInfo)
{
   
    if (typeof(element) === 'number')
    {
        sum1 += element;
        ++count1;
    }
}

let average = sum1/count1;
console.log(average);


// Print the contents of the input variable

var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
    ]
    function dataHandling4(input){
    for (var i = 0; i < input.length; i++) {
    //Your code goes here
    console.log(...input[i]);
    }
    }
    dataHandling4(input);
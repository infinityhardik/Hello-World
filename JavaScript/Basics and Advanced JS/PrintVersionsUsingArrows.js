/* 
Description
You are given an array containing some words in the form of string. 
You are required to create a function which distinguishes these words in the array using a delimiter provided by the user. 

A delimiter is a character or a sequence of characters which is(are) used to distinguish given items. 

You are required to print all the words distinguished using a delimiter on the console.
*/

/* 
Sample Input:
words = ["Kitkat", "Lollipop", "Marshmallow", "Nougat", "Oreo"];

delimiter = ","

Sample Output (printed on Console tab):
Kitkat,Lollipop,Marshmallow,Nougat,Oreo
*/



/* TODO 1: Define an arrow function based on the information given in comment below
The identifier used for this function must be mergeWords.
*/
/**
* Function to merge the given array of words (strings) into a single string separated by the given delimiter
* @param {*} wordsArr array consisting of a list of single-word strings
* @param {*} delimiter sequence of one or more characters used to distinguish between different words
*/
const mergeWords = (words) =>{
    let ans = "";
    for(let i =0; i<words.length;i++){
        ans+=words[i];
        if(i!==(words.length-1)){
            ans+=",";
        }
    }
    return ans;
}


/* TODO 2: Define an arrow function based on the information given in comment below
The identifier used for this function must be printMessage.
*/
/**
* Function to log message to the console
* @param {*} message message to be logged on to the console
*/

const printMessage = message => console.log(message);


/* TODO 3: Call the arrow function named mergeWords defined earlier with the argument words defined as an array for you and a comma (",") as the delimiter
& 
Call the arrow function named printMessage while passing the result of the function named mergeWords as an argument to it
*/
const words = ["Kitkat", "Lollipop", "Marshmallow", "Noughat", "Oreo"];

printMessage(mergeWords(words));
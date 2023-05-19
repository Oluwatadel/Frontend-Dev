//declaring variable
let x = 5;
const y = 7;
const result = x + y;
console.log(result) // to print to console

let namez = "Hello World";

console.log(namez.length);

//to concatenate

let myself = "Tobi"
let greet = namez + " " + myself
console.log(greet);

let N = "congratulations you are a pro";
let M = "You need more lesson";
if (greet.length > 12) {
    console.log(N);
}

else {
    console.log(M);
}

let arr = ["1","2", "3"];
for (i= 0; i <= arr.length, i++;){
    console.log(arr);
}

function Ispalindrome(str){
    const strpl = str.split("")     //first split the string into individual character
    const arrValue = strpl.reverse();       //reverse your splitted character
    const reversestring = arrValue.join('');        //join the reversed character to form a string
    console.log(reversestring); //now print to the joined word to console


    let correct = "your word is palindrome";
    let wrong = "your word is not palindrome";
    
    for (i = 0; reversestring !== str; i++){
        if (reversestring !== str){
            prompt("Enter another word");
        }
        else {
            console.log(correct)
        }
    }


    // if (reversestring === str){
    //     console.log(correct);
    // }
    // else{
    //     console.log(prompt("Enter another word of choice"));
    //     for (i = 0; reversestring !== str; i++){
    //     if (reversestring !== str){
    //         prompt("Enter another word");
    //     }
    //     else {
    //         console.log(correct)
    //     }
    // }
    // }
}


Ispalindrome("MADAM");    
Ispalindrome("OYO");
Ispalindrome(prompt("Enter any word of choice"));
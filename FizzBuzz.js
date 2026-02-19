// TODO: Define constants for the form and the result display area
const texts = document.getElementById ("inputs")
const submitBtn = document.getElementById("submission")
const results = document.getElementById("result")
//console.log(submitBtn)
// TODO: Add the first line of the event listener to handle form submission
    // Prevent the form from refreshing the page
//event.preventDefault();

// TODO: Get the number from the form input
// TODO: Write FizzBuzz logic here
submitBtn.onclick = function (){
    let num = Number(texts.value)
    if ((num % 5 ==0 ) && (num % 3==0)){
        //let output = "FizzBuzz";
        results.textContent = "FizzBuzz";
    }
    else if (num % 3 == 0){
        //let output = "Fizz";
        results.textContent = "Fizz";
    }
    else if (num % 5  == 0){
        //let output = "Buzz";
        results.textContent = "Buzz";
    }
    else{
        //output = num;
        results.textContent = num; 
    }
    //results.textContent = output;
 }

// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
//result.textContent = output;

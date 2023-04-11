 //1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function stringa(food){
return food.split("").reverse("").join("");



}
let food="eating"
console.log(stringa(food));



// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function binarysearch(num,target){

         let left=0;
        let right=num.length-1;
    
       while(left<=right){
    let middle=Math.floor((left+right)/2)
     if(num[middle]===target){
    return middle;
     }
     else if(num[middle]>target){
     right=middle-1;
    
    
        }
        else{
    
    left=middle+1;
        }
    
    }
     return null;
    
     }
     let num = [2,8,0,23,5,45,76]
     target=23;
     console.log(binarysearch(num,target));

    
// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”



let nu=[2000,...2023]
for(i=0; i<nu.length; i++){
if(i%2==0){
console.log("all even are leap years:",nu[i])


}
else{
console.log("2001 is not a leap year")


}

}





// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
     




// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
function arrNum(numArray){
 return numArray.forEach(element => {
    console.log(element*4)
});



}
let numArray = [12,87,45,75,23,64,73];
arrNum(numArray);
// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
function str(nums){
for (i=0; i<nums.length; i++)

    console.log("turn to number :",nums*1)

}

let nums = ["10","24","45","56","67"]
console.log("Turn to number:",nums*1 );






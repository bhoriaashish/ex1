


// let arr = [1,5,6,5,9,4,9,4,3,2];
// const findDups = (arr) => {
//     const dups = []
//     const compair = []

//     for(let num of arr){
//         if(!compair.includes(num)){
//             compair.push(num);
//         }else{
//             dups.push(num)
//         };
//     }return dupsf

// };

// const arr = [1,2,3,4,3,2,1,5,6,7]
// console.log(findDups(arr));



// const finddups = (arr) => {
//     const dups = []
//     let index 

//     for (let i = 0; i < arr.length; i++) {
//         index = Math.abs(arr[i]) -1

//         if(arr[index] < 0){
//             dups.push(index + 1);
//         }else{
//             arr[index] *= -1
//         }
//     }
//     return dups
// }

// console.log(finddups(arr))



// function subarraysum(arr, n, subarraysum) {

//     let curr_sum = 0;

//     for(let i = 0; i<n; i++){
//         for(let j= 1; j<= n; j++){
//             if(curr_sum == sum ){
//                 document.write("Sum found between indexes "+i+" and "+(j-1));
//                 return;
//             }
//             if(curr_sum > sum || j == n)
//                 break;
//              curr_sum = curr_sum + arr[j];
//         }
        
//         document.write("no subarray found");
//         return;
    
//     }
// }





//arr = [1,5,6,5,9,4,9,4,3,2];
//let n = arr.length
//sum = 25
// subarraysum(arr, n, sum);








// function maxSubArray(nums){
//     if(num.lenght === 1 ) {}
// }

  



// function inorderTraversal(root){
//     let tourish = (root);
//     let solution = [];

//     while(tourish !== node){
//         let guide = tourish.left;
//         if(tourish.left != null) {
//             while(guide.right !== null && guide.right !== tourist){
//                 guide = guide.right;
//             }
//             if(guide.right = null){
//                 guide.right = tourish;
//                 tourist = tourist.left;
//             } else{
//                 guide.right = null;
//                 solution.push(tourish.val);
//                 tourish = tourist.right;
//             }
            
//             // else{
//             //     solution.push(tourish.val);
//             //     tourish = tourist.right;
//             // }
//         }
//     }
//     return solution;
// }




// function preorderTravarsal(root){
//     let tourish = (root);
//     let solution = [];

// }
    




//  preorder 

// function a () {

// }

// const b = () => {

// }


//

//MIN & MAX


// Reverse array

 

let firstBatch = 5

let secondBatch = 7

let count = firstBatch + secondBatch

console.log(count)


let myAge = 35

let humanDogratio = 7 

let myDogAge = myAge * humanDogratio

console.log(myDogAge)


let bonusPoint = 50
console.log(bonusPoint)

bonusPoint = bonusPoint + 50
console.log(bonusPoint)

bonusPoint = bonusPoint - 25
console.log(bonusPoint)

bonusPoint = bonusPoint + 70 
console.log(bonusPoint)



function Ashish () {
    console.log(42)
}


Ashish()





Ashish()

let lapsCompleted = 0

function incrementLap(){
    lapsCompleted = lapsCompleted + 1 
}

incrementLap()

console.log(lapsCompleted)


 count = 5

function increment() {
    count = count + 1
}

increment()

console.log(count)



function save(){
    count = count + 1

}
save()

console.log(count)


let username = "per"
let message = "that contain the message we have logged "



let messageToUser = message + "," + username + "!"

console.log(messageToUser)


let name = "Ashish"
let greeting = "Hi , my name is "

let myGreeting = greeting + "," + name + "!"

console.log(myGreeting)



name = "Ashish"
greeting = "Welcome messege using welcomeEl"

console.log(name + greeting)


//function increment(){
  //  count += 1 
    //countEl.textcontent = count 
//}


//function save() {
    //let countstr = count + " - "
    //let saveEl.textCountent += countstr 
    //countEl.textcounter = 0
    //count = 0

//}

let myPoints = 3

function add3Points(){
    myPoints += 3
    
    console.log(myPoints)
}

add3Points()
add3Points()
add3Points()

function removelPoints() {
    myPoints -= 1 

    console.log(myPoints)
}

removelPoints()
removelPoints()

let num1 = 8
let num2 = 2

function add(){
    console.log(num1 + num2)
}

add()

function subtract() {
    console.log(num1 - num2)

}
subtract()

function divide() {
    console.log(num1 % num2)
}

divide()


function multiply() {
    console.log(num1 * num2)
}

multiply()


let firstCard = 4
let secondCard = 9

let sum = firstCard + secondCard

console.log(sum)

if (sum < 21) {
    console.log("Do You Want to Draw a New Card")

}else if (sum === 21) {
    console.log("Wooho! you've a blackjack")

}else if (sum > 21) {
    console.log("You're out of the game")
}


let age = 22

if (age < 21) {
    console.log("You can not Enter the Club!")

}else if (age > 21) {
    console.log("Welcome")
}

age = 100
if (age < 100){
    console.log("Not Elegible")
}else if (age === 100) {
    console.log("Here is your Birthday Card from the King!")
}else {
    console.log("Not Elegible, you have already gotten one")
}


  firstCard = 10
  secondCard = 11
  let cards = ["firstCard", "secondCard"]
  sum = firstCard + secondCard + newCard
let hasBlackJack = false
let isAlive = true


 
function startGame(){   
if (sum < 21){
    message = "Do you want to draw a new Card!"
}else if(sum === 21){
    message = "Wohoo! You've got a Blackjack"
    hasBlackJack = true 
}else{ 
    message = "You're out of the game"
    isAlive = false 
}
console.log(hasBlackJack)

console.log(isAlive)
console.log(message)
}


function newCard() {
    console.log("Drawing a new card from the deck!")
    
    let card = 8
    newCard.push(card)
    console.log(card)

}
console.log(startGame)

startGame()

////Arrays -  ordered lists of item 

let myDescription = ["Ashish","22","I like pizza"]

console.log(myDescription)

 message = [
     "Hey how's it going?",
     "I'm great, thank you! How about you?",
     "All good, been working on my portfolio lately."

 ] 
 for(i = 0; i < message.length; i += 1) {
     console.log(i)
 }
message.push("Same here")

console.log(message)

message.pop("Same here")

console.log(message)


for (let count = 10; count < 21; count +=1) {
    console.log(count)
}

for(let i = 10; i < 101; i += 10 ) {
    console.log(i)
}

 cards = [7, 3, 9] 
 for(let i = 0; i < cards.length ; i++) {
     console.log(cards[i])
 }

 //let sentence = ["Hello", "my", "is", "per"]
  //let greetingEl = document.getElementById("greeting-el")
  //for(i = 0; i < sentence.length; i++) {
    //  greetingEl.textContant += sentence[i]
  //}
let player1Time = 102
let player2Time = 107

function totalraceTime() {
    return  player1Time + player2Time
}

let totalTime = totalraceTime;


console.log(totalTime);
totalraceTime(totalTime);




// let arra = [12, 13 ,14, 15, 16];

// index -         0,   1,  2, 3,  4
// index value -   12, 13, 14, 15, 16

// arr[0] -> 12
// arr[1] -> 13
// arr[4] -> 16
 

let array = [2, 3, 6, 9, 4, 7, 1];
target = 13
 ,  }
};

d
array = [2, 5, 1, 3, 0
    if
}





function writeCards(names, eventName) {

 // 1) Create a new, empty array to hold the messages.
 const messages = [];
 //2) Iterate through the input array
  for (let count = 0; count < names.length; count++) {

// 3) using string interpolation inside the loop, build out the thank you message. 
    const message = `Thank you, ${names[count]}, for the wonderful ${eventName} gift!`;

// 4) Add the message to the new empty message array we created earlier.
    messages.push(message);
  }
// 3) return the new array once the loop comes to an end.
  
  return messages;

}

console.log(writeCards([], ''));

function countDown(){
    let countDown = 10;
    while (countDown){
        
        console.log(countDown--);
    }
console.log(countDown);
}
console.log(countDown());
   
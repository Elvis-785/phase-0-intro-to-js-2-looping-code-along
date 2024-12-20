// Code your solutions in this file
function writeCards(names, giftType) {
    // Initialize an empty array to store the thank you messages
    let thankYouMessages = [];
  
    // Loop through each name in the 'names' array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for each name and push it to the array
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
    }
  
    // Return the array of thank you messages
    return thankYouMessages;
  }
  
  // Example usage:
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(10);
  
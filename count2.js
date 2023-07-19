// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if (count >= 30) {
    count = 30;
  } else {
    count++;
  }
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  if (count <= 0) {
    count = 0;
  } else {
    count--;
  }
  totalCount.innerHTML = count;
};

// Function to reset count
const handleReset = () => {
  count = 0;
  totalCount.innerHTML = count;
};

// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const resetCount = document.getElementById("reset");

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
resetCount.addEventListener("click", handleReset);

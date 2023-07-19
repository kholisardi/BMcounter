// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 26;
var danger;
let safe;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if (count > 29) {
    count = 30;
  } else {
    count++;
  }

  if (count == 20 || count == 29) {
    danger = 1;
    safe = 0;
  }

  totalCount.innerHTML = count;
  if (danger) {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.add("bg-danger");
    // boxes[0].classList.remove("bg-primary");
  }
};

// Function to decrement count
const handleDecrement = () => {
  if (count <= 0) {
    count = 0;
  } else {
    count--;
  }
  totalCount.innerHTML = count;

  if (count <= 19) {
    safe = 1;
    danger = 0;
  }
  if (count >= 21 || count <= 28) {
    safe = 1;
    danger = 0;
  } else if (count > 28) {
    danger = 1;
    safe = 0;
  }

  if (safe) {
    const boxes = document.getElementsByClassName("box");
    // boxes[0].classList.add("bg-success");
    boxes[0].classList.remove("bg-danger");
  }
  if (danger) {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.add("bg-danger");
    // boxes[0].classList.remove("bg-primary");
  }
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

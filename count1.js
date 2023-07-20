// Select total count
const totalCount = document.getElementById("total-count");
const countdanger = document.getElementById("count-danger");

// Variable to track count
var count = 0;
var danger;
let safe;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if (count !== 30) {
    count++;
  }

  if (count === 20 || count === 29) {
    danger = 1;
  } else if (count === 21 || count === 30) {
    danger = 2;
  }

  totalCount.innerHTML = count;
  if (danger == 1) {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.add("bg-danger");
    boxes[0].classList.add("text-light");
    // boxes[0].classList.remove("bg-primary");
  } else {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.remove("bg-danger");
    boxes[0].classList.remove("text-light");
  }
};

// Function to decrement count
const handleDecrement = () => {
  if (count > 0) {
    count--;
  }

  if (count == 0 || count === 19) {
    danger = 2;
  } else if (count === 20 || count === 29) {
    danger = 1;
  } else if (count === 21 || count === 28) {
    danger = 2;
  }

  totalCount.innerHTML = count;

  if (danger == 1) {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.add("bg-danger");
    boxes[0].classList.add("text-light");

    // boxes[0].classList.remove("bg-primary");
  } else {
    const boxes = document.getElementsByClassName("box");
    boxes[0].classList.remove("bg-danger");
    boxes[0].classList.remove("text-light");
  }
};

// Function to reset count
const handleReset = () => {
  danger = 2;
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

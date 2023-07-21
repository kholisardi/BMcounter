// Select total count
const totalCount = document.getElementById("total-count1");
const countdanger = document.getElementById("count-danger");

// Variable to track count
var count1 = 0;
var danger;
let safe;

// Display initial count value
totalCount.innerHTML = count1;

// Function to increment count
const handleIncrement = () => {
  if (count1 !== 30) {
    count1++;
  }

  if (count1 === 20 || count1 === 29) {
    danger = 1;
  } else if (count1 === 21 || count1 === 30) {
    danger = 2;
  }

  totalCount.innerHTML = count1;
  if (danger == 1) {
    const boxes = document.getElementsByClassName("box1");
    boxes[0].classList.add("bg-danger");
    boxes[0].classList.add("text-light");
    // boxes[0].classList.remove("bg-primary");
  } else {
    const boxes = document.getElementsByClassName("box1");
    boxes[0].classList.remove("bg-danger");
    boxes[0].classList.remove("text-light");
  }
};

// Function to decrement count
const handleDecrement = () => {
  if (count1 > 0) {
    count1--;
  }

  if (count1 == 0 || count1 === 19) {
    danger = 2;
  } else if (count1 === 20 || count1 === 29) {
    danger = 1;
  } else if (count1 === 21 || count1 === 28) {
    danger = 2;
  }

  totalCount.innerHTML = count1;

  if (danger == 1) {
    const boxes = document.getElementsByClassName("box1");
    boxes[0].classList.add("bg-danger");
    boxes[0].classList.add("text-light");

    // boxes[0].classList.remove("bg-primary");
  } else {
    const boxes = document.getElementsByClassName("box1");
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
const incrementCount = document.getElementById("increment-count1");
const decrementCount = document.getElementById("decrement-count1");
const resetCount = document.getElementById("reset");

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
resetCount.addEventListener("click", handleReset);

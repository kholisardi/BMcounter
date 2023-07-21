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

// ---------------------------------------------------------------------------------------------------

// Select total count
const totalCount1 = document.getElementById("total-count1");

// Variable to track count
var count1 = 0;
var danger1;

// Display initial count value
totalCount1.innerHTML = count1;

// Function to increment count
const handleIncrement1 = () => {
  if (count1 !== 30) {
    count1++;
  }

  if (count1 === 20 || count1 === 29) {
    danger1 = 1;
  } else if (count1 === 21 || count1 === 30) {
    danger1 = 2;
  }

  totalCount1.innerHTML = count1;
  if (danger1 == 1) {
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
const handleDecrement1 = () => {
  if (count1 > 0) {
    count1--;
  }

  if (count1 == 0 || count1 === 19) {
    danger1 = 2;
  } else if (count1 === 20 || count1 === 29) {
    danger1 = 1;
  } else if (count1 === 21 || count1 === 28) {
    danger1 = 2;
  }

  totalCount1.innerHTML = count1;

  if (danger1 == 1) {
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
const handleReset1 = () => {
  danger1 = 2;
  count1 = 0;
  totalCount1.innerHTML = count1;
};

// Select increment and decrement buttons
const incrementCount1 = document.getElementById("increment-count1");
const decrementCount1 = document.getElementById("decrement-count1");
const resetCount1 = document.getElementById("reset1");

// Add click event to buttons
incrementCount1.addEventListener("click", handleIncrement1);
decrementCount1.addEventListener("click", handleDecrement1);
resetCount1.addEventListener("click", handleReset1);

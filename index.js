const billAmount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click", function validateBillAmount() {
  console.log("clickedd");
  hideMessage();
  if (billAmount.value > 0) {
    if (cashgiven.value >= billAmount.value) {
      const amountToBeReturned = cashgiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showErrorMessage("cash should be greater than or equal to amount");
    }
  } else {
    showErrorMessage("Invalid bill amount");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function showErrorMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    console.log(numberOfNotes);
    noOfNotes[i].innerText = numberOfNotes;
  }
}

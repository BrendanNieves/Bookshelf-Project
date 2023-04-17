
const submitButton = document.querySelector(".sendMessage");
const inputFields = document.querySelectorAll(".main input, #message");

// Functiom that check if an input is empty
function checkEmptyInputs() {
    let empty = false;
    inputFields.forEach((input) => {
        if (input.value === "") {
        empty = true;
        }
    });
    submitButton.disabled = empty;
}

// For each method that checks if any of the inputs are empty
inputFields.forEach((input) => {
    input.addEventListener("input", checkEmptyInputs);
});

checkEmptyInputs();

// Alerts when message is submitted and clears input fields
submitButton.addEventListener("click", function(){
    alert("Thank you for your message, a team member will get back to you shortly!");
    inputFields.forEach((input) => {
        input.value = "";
    });
});
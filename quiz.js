// Step 1: Start with the Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";

    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Step 4: Compare the User’s Answer with the Correct Answer
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

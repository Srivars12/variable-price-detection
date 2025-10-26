document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".question").forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            // Close all other answers before opening a new one (optional)
            document.querySelectorAll(".answer").forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = "none";
                    ans.previousElementSibling.parentElement.classList.remove("active");
                }
            });

            // Toggle the clicked answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                question.parentElement.classList.remove("active");
            } else {
                answer.style.display = "block";
                question.parentElement.classList.add("active");
            }
        });
    });
});

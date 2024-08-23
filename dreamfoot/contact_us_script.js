// Shake animation on invalid submission
document.querySelector("form").addEventListener("submit", function (event) {
    let valid = true;
    document.querySelectorAll("input, select, textarea").forEach(function (input) {
        if (!input.value) {
            valid = false;
            input.classList.add("shake");
            setTimeout(function () {
                input.classList.remove("shake");
            }, 500);
        }
    });
    if (!valid) event.preventDefault();
});

// Shake animation CSS
const style = document.createElement("style");
style.innerHTML = `
.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}
`;
document.head.appendChild(style);


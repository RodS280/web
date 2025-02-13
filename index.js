document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".titulo h1, .titulo h2").forEach(el => {
        let letters = el.textContent.split("").map(letter => 
            `<span>${letter === " " ? "&nbsp;" : letter}</span>`
        ).join("");
        el.innerHTML = letters;
    });
});

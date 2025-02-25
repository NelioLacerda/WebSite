document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const projectCards = document.querySelectorAll(".project-card");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            projectCards.forEach(card => {
                if (category === "all" || card.classList.contains(category)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Exibir todos os projetos por padrão
    document.querySelector(".category-btn[data-category='all']").click();
});

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

// ===== script.js =====
$(document).ready(function() {
    // Zoom lightbox
    const lightbox = $('#lightbox');
    const lbImg = $('#lightbox-img');
    const caption = $('#caption');

    $('.zoomable').on('click', function() {
        lbImg.attr('src', $(this).attr('src'));
        caption.text($(this).attr('alt'));
        lightbox.fadeIn();
    });

    $('.close, #lightbox').on('click', function(e) {
        // fecha apenas se clicar no fundo ou no X
        if (e.target !== this) return;
        lightbox.fadeOut();
    });

    // Copiar link
    $('#copy-link-btn').on('click', () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                $('#copy-link-btn').text('✅ Copied!');
                setTimeout(() => { $('#copy-link-btn').text('🔗 Copy Link'); }, 2000);
            })
            .catch(err => console.error('Erro ao copiar:', err));
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("show");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });

    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });

    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        menu.querySelectorAll("a").forEach(link => {
            const href = link.getAttribute("href");

            if (href === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    highlightCurrentPage();
});

function toggleCollapse(btn) {
    const content = btn.nextElementSibling;

    btn.classList.toggle("active");
    content.classList.toggle("open");
}

        document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const popup = document.getElementById("successPopup");

    if (!form || !popup) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                popup.classList.add("show");

                setTimeout(() => {
                    popup.classList.remove("show");
                }, 2500);
            }
        } catch (err) {
            console.error("Form error:", err);
        }
    });
});
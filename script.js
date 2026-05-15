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
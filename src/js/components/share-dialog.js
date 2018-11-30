document.addEventListener("click", function(e) {

    if (
        (e.target.closest("a") != null) &&
         e.target.closest("a").classList.contains("sharing-link-hm")
    ) {
        e.preventDefault();
        let href = e.target.getAttribute("href")
            ? e.target.getAttribute("href")
            : e.target.closest("a").getAttribute("href");

        window.open(
            href,
            "window",
            "width=500,height=350,resizable,scrollbars=yes,status=1"
        );
    }
});

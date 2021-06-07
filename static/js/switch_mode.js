window.onload = function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const theme = document.getElementById("stylesheet_toggle");
    const selected = localStorage.getItem("css");
    console.log(toggle);
    console.log(theme);
    console.log(selected);
    if (selected !== null) {
      theme.href = selected;
    }

    toggle.addEventListener("click", function () {
        if (theme.getAttribute("href") == "/static/css/style.css") {
            theme.href = "/static/css/darkstyle.css";
            console.log('dark mode');
        } else {
            theme.href = "/static/css/style.css";
            console.log('light mode');
        }
        localStorage.setItem("css", theme.href);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme") || false;
    if (theme) document.documentElement.setAttribute("data-theme", theme);
});

document.getElementById('darkMode').onclick = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    document.getElementById('light-dark').setAttribute('style', 'rotate: 180deg');
};



document.getElementById('darkMode').onclick = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    document.getElementById('light-dark').setAttribute('style', 'rotate: 180deg');
};
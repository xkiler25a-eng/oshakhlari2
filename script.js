
let currentLanguage = "fa";

const languageButton = document.getElementById("language");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const changeLanguage = (language) => {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-fa][data-en]").forEach(function (element) {
        element.textContent = element.getAttribute("data-" + language);
    });

    languageButton.textContent = language === "fa" ? "EN" : "FA";

    document.title = language === "fa"
        ? "OSHAKHLARI | دنیای اوشاخلاری"
        : "OSHAKHLARI | The Oshakhlari Universe";
}

languageButton.addEventListener("click", function () {
    const nextLanguage = currentLanguage === "fa" ? "en" : "fa";
    changeLanguage(nextLanguage);
});

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        ("open");
    });
});

changeLanguage("fa");
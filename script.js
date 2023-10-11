document.addEventListener("DOMContentLoaded", function () {
  const themeStyle = document.getElementById("mode");
  const darkModeToggle = document.getElementById("mySwitch");

  darkModeToggle.addEventListener("change", function () {
      if (themeStyle.getAttribute("href") === "styles/lightmode.css") {
          themeStyle.setAttribute("href", "styles/darkmode.css");
      } else {
          themeStyle.setAttribute("href", "styles/lightmode.css");
      }
  });
});

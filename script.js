/* https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */

const darkModeToggle = document.getElementById('dark-mode-toggle');
const slider = document.querySelector(".slider");

function getUserThemePreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkModeToggle.checked = true;
      slider.classList.add("checked");
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      darkModeToggle.checked = false;
      slider.classList.remove("checked");
      document.documentElement.removeAttribute('data-theme');
    }
  }
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        slider.classList.add("checked");
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        slider.classList.remove("checked");
    }    
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    getUserThemePreference();
});
darkModeToggle.addEventListener('change', switchTheme, false);
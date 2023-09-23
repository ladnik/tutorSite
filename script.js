/* https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */

const darkModeToggle = document.getElementById('dark-mode-toggle');

function getUserThemePreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkModeToggle.checked = true;
      darkModeToggle.click();
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      darkModeToggle.checked = false;
      document.documentElement.removeAttribute('data-theme');
    }
  }
function switchTheme(e) {
    console.log("switch\n");
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    getUserThemePreference();
});
darkModeToggle.addEventListener('change', switchTheme, false);
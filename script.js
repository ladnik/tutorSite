/* https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
/* https://www.w3schools.com/js/js_cookies.asp */

const darkModeToggle = document.getElementById('dark-mode-toggle');
const slider = document.querySelector('.slider');

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getUserThemePreference() {
  var themePreference = getCookie('theme')
  if (themePreference === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
    slider.classList.add('checked');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkModeToggle.checked = false;
    slider.classList.remove('checked');
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    slider.classList.add('checked');

    const expires = new Date(Date.now() + 15552000000).toUTCString();
    document.cookie = `theme=dark; expires=${expires}; path=/`;
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    slider.classList.remove('checked');

    const expires = new Date(Date.now() + 15552000000).toUTCString();
    document.cookie = `theme=light; expires=${expires}; path=/`;
  }
}

/*
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  getUserThemePreference();
});
*/
window.onload = function() {
  getUserThemePreference();
};
darkModeToggle.addEventListener('change', switchTheme, false);

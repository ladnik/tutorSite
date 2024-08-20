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

// async function fetch_pwd() {
//   try {
//     const response = await fetch("sha");
//     if (!response.ok) {
//       throw new Error('error: ' + response.statusText);
//     }
//     const text = await response.text();
//     return text.trim();
//   } catch (e) {
//     console.error(e);
//   }
// }
// 
// async function sha256(s) {
//   let encoder = new TextEncoder();
//   let data = encoder.encode(s);
//   let buf = await crypto.subtle.digest('SHA-256', data);
//   let arr = Array.from(new Uint8Array(buf));
//   let hx = arr.map(byte => byte.toString(16).padStart(2, '0')).join('');
//   return hx;
// }
// 
// async function input_pwd(e) {
//   e.preventDefault();
//   let pwd = prompt("Enter password:")
// 
//   if (pwd === null) {
//     return;
//   }
//   else if (await sha256(pwd) === await fetch_pwd()) {
//     alert("OK!");
//   }
//   else {
//     alert("Nope :(");
//   }
// 
// }
// 
// const link = document.getElementById("promptLink");
// link.addEventListener("click", input_pwd)
/// toggleNavMenuOnLoad.js
/// https://developer.chrome.com/

// this code will break January 2023 due to the discontinued support of manifest v2

chrome.storage.local.get("doIt", ({ doIt }) => { if (doIt) {toggleTheSidebar()} })

function toggleTheSidebar() {
  // working as of Fall 2021
  
  document.body.classList.remove('course-menu-expanded')

  const subnavMenuToggle = document.getElementById('courseMenuToggle')
  subnavMenuToggle.setAttribute('aria-label', 'Show Navigation Menu')
  subnavMenuToggle.setAttribute('title', 'Show Navigation Menu')

  const menuToggle = document.getElementById('left-side')
  menuToggle.setAttribute('style', 'display: none')
}

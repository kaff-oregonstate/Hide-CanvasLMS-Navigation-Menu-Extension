/// popup.js
/// https://developer.chrome.com/
/// https://developer.mozilla.org/en-US/docs/Web/API/

// get DOM object
let doToggleInput = document.getElementById("doToggle");

// initialize checkbox to currently saved value
chrome.storage.local.get("doIt", ({ doIt }) => {
  if (!doIt) {
    doToggleInput.removeAttribute('checked')
  }
});

// add listener so that changes to checkbox can change the stored and used value
doToggleInput.addEventListener('change', updateRemoveScreenReaderValue);
function updateRemoveScreenReaderValue(e) {
  // update storage
  chrome.storage.local.set({"doIt": doToggleInput.checked});
  // prompt user to reload page
  document.getElementById("reloadPrompt").removeAttribute('hidden');
}

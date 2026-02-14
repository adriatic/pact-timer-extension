console.log("PACT content.js loaded")
document.body.style.border = "5px solid green";
chrome.runtime.sendMessage({
  type: "PING"
});



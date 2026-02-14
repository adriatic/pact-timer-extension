let totals = {};

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TIME_UPDATE") {
    const host = message.url;
    const duration = message.duration;

    if (!totals[host]) {
      totals[host] = 0;
    }

    totals[host] += duration;

    chrome.storage.local.set({ totals });
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("totals");

  const data = await browser.storage.local.get("totals");
  const totals = data.totals || {};

  if (Object.keys(totals).length === 0) {
    container.textContent = "No time recorded yet.";
    return;
  }

  for (const [host, time] of Object.entries(totals)) {
    const div = document.createElement("div");
    div.textContent = `${host}: ${(time / 1000).toFixed(1)} sec`;
    container.appendChild(div);
  }
});

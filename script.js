function updateDateTime() {
  const now = new Date();

  document.getElementById("dateTime").innerText = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

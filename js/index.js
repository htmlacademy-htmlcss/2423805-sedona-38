document.getElementById("open-modal-window").addEventListener("click", function() {
  document.getElementById("modal-window").classList.add("open");
});

document.getElementById("modal-close-button").addEventListener("click", function() {
  document.getElementById("modal-window").classList.remove("open");
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-window").classList.remove("open");
  }
});

// Close the modal window when clicking outside it
document.querySelector("#modal-window .modal").addEventListener('click', Event => {
  Event._isClickWithInModal = true;
});

document.getElementById("modal-window").addEventListener('click', Event => {
  if (Event._isClickWithInModal) return;
  Event.currentTarget.classList.remove("open");
});

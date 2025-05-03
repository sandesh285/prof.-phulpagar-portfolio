// Gallery tab functionality

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  if (tabButtons.length && tabPanes.length) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))

        // Add active class to clicked button
        button.classList.add("active")

        // Show corresponding tab pane
        const tabId = button.getAttribute("data-tab")
        const tabPane = document.getElementById(tabId)

        if (tabPane) {
          tabPane.classList.add("active")
        }
      })
    })
  }
})

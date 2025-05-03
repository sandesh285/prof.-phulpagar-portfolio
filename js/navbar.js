// Navbar functionality

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const navbarToggle = document.getElementById("navbar-toggle")
  const navbarMenu = document.getElementById("navbar-menu")

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active")

      // Change icon based on menu state
      if (navbarMenu.classList.contains("active")) {
        navbarToggle.innerHTML = '<i class="fas fa-times"></i>'
      } else {
        navbarToggle.innerHTML = '<i class="fas fa-bars"></i>'
      }
    })
  }

  // Dropdown functionality
  const dropdownToggles = document.querySelectorAll(".navbar-dropdown-toggle")

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation()

      // Close all other dropdowns
      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.classList.remove("active")
          otherToggle.nextElementSibling.classList.remove("active")
        }
      })

      // Toggle current dropdown
      toggle.classList.toggle("active")
      toggle.nextElementSibling.classList.toggle("active")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdownToggles.forEach((toggle) => {
      toggle.classList.remove("active")
      toggle.nextElementSibling.classList.remove("active")
    })
  })

  // Prevent dropdown from closing when clicking inside it
  const dropdownMenus = document.querySelectorAll(".navbar-dropdown-menu")
  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  })
})

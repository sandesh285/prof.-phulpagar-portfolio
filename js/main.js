// Main JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
  // Sticky sidebar for profile section
  const profileSidebar = document.querySelector(".profile-sidebar")

  if (profileSidebar) {
    const stickyOffset = profileSidebar.offsetTop

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > stickyOffset) {
        profileSidebar.classList.add("sticky")
      } else {
        profileSidebar.classList.remove("sticky")
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(href)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })
})

// Vibrant website — vanilla JS only.
// 1) Mobile hamburger menu (keyboard-usable <button>, aria-expanded kept in sync).
// 2) Footer copyright year. 3) Proposal form: builds a mailto link so
//    the visitor's own email app sends the request (no third-party service).
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu when a link is chosen (mobile only).
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      // No third-party service: open the visitor's own email app with a
      // ready-to-send message addressed to info@vibrant.ae. The email
      // genuinely comes from the visitor's own email account once they
      // press Send in their mail app. The plain mailto form action is
      // the fallback when JavaScript is unavailable.
      event.preventDefault();
      var get = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? el.value.trim() : "";
      };
      var subject = "New Proposal Request - " + get("name");
      var lines = [
        "Full Name: " + get("name"),
        "Company: " + get("company"),
        "Phone Number: " + get("phone"),
        "Email Address: " + get("email"),
        "",
        "Project Details:",
        get("details")
      ];
      window.location.href = "mailto:info@vibrant.ae?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
    });
  }
});

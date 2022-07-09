// Variables

const TYPE_LINE1 = "Hello, I'm Eckard.";
const TYPE_LINE2 = "I'm a full stack web developer.";

let cursorPosition = 0;
let typeCounter = 0;
let typeSpeed = 100;

// Main scripting sequence
$(document).ready(function () {
  // Scroll to top of typewriter section on load
  $("html, body").animate({
    scrollTop: $("#typewriter").offset(),
  });
  // Menu hamburger animation
  $(".menu-button").click(() => {
    $(".menu").toggleClass("menu-open");
  });
});
window.addEventListener(
  "load",
  (callTypeWriter = () => setTimeout(typeWriter, 1500, TYPE_LINE1))
);

// Functions

// Typewriter animation
function typeWriter(text) {
  // Checks length of current typed line.
  if (cursorPosition < text.length) {
    document.getElementById("typewriter").innerHTML +=
      text.charAt(cursorPosition);
    cursorPosition++;
    typeCounter++;
    setTimeout(typeWriter, typeSpeed, text);
    // Checks total length of all typed lines.
  } else if (typeCounter < TYPE_LINE1.length + TYPE_LINE2.length) {
    document.getElementById("typewriter").innerHTML += "<br/>";
    cursorPosition = 0;
    setTimeout(typeWriter, 1000, TYPE_LINE2);
  }
}

// Show About section
$("#about-link").click(function (event) {
  // Smooth scrolling
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 100,
    },
    600
  );
  // Hides Work section (for smaller displays)
  $("#work").addClass("hide-display");
  // Checks if About section is currently hidden & toggles class to reveal it.
  if (document.getElementById("about").classList.contains("hide-display")) {
    $("#about").toggleClass("hide-display");
  }
  $("#about").animate({ opacity: "100%" }, 1500);
});

// Show Work section
$("#work-link").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#work").offset().top - 100,
    },
    600
  );
  // Hides About section (for smaller displays)
  $("#about").addClass("hide-display");
  // Checks if Work section is currently hidden & toggles class to reveal it.
  if (document.getElementById("work").classList.contains("hide-display")) {
    $("#work").toggleClass("hide-display");
  }
  $("#border-draw-box1").animate({ width: "0%" }, 1000);
  $("#border-draw-box2").animate({ height: "0%" }, 1000, () => {
    $("#work-content").animate({ opacity: "100%" }, 1000);
  });
});

// Show Contact section
$("#contact-link").click(function (event) {
  // Scrolling effect applied to both 'body' and 'html' for browser compatability.
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    800
  ),
    setTimeout(() => {
      $("#gmail").addClass("grow-icon"),
        setTimeout(() => {
          $("#github").addClass("grow-icon"),
            setTimeout(() => {
              $("#linkedin").addClass("grow-icon"),
                setTimeout(() => {
                  $("#gmail").removeClass("grow-icon");
                  $("#github").removeClass("grow-icon");
                  $("#linkedin").removeClass("grow-icon");
                }, 600);
            }, 150);
        }, 150);
    }, 250);
});

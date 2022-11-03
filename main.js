"use strict";

const title = `<h1>
<title-text>
  Filimon Bogdan Daniel
</title-text>
</h1>`;

const firstSubtitle = `<h3>Student at Technical University of Cluj-Napoca
- Automation & Computer Science 
</a></h3>`;

const secondSubtitle = `<h3>React Developer</h3>`;

// set up text to print, each item in array is new line
const aText = [title, firstSubtitle, secondSubtitle];
const iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
const iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ""; // initialise contents variable
let iRow; // initialise current row

const typewriter = () => {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);
    const destination = document.getElementById("typedText");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
    }
    destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
    sessionStorage.setItem("tipewriter", true);
};

try {
    if (!sessionStorage.getItem("tipewriter")) {
        typewriter();
    } else {
        const destination = document.getElementById("typedText");
        destination.innerHTML = title + firstSubtitle + secondSubtitle;
    }
} catch (error) {
    console.log(error);
}

const html = document.querySelector("html");
const body = document.querySelector("body");
const main = document.querySelector("main");
const menuElement = document.querySelector(".menuElement");

const applyLightMode = () => {
    const elements = document.querySelectorAll(".theme");
    elements.forEach((element) => {
        const style = element.style;
        style.backgroundColor = "#d5d5d5";
        style.color = "rgb(30, 30, 30)";
    });
    const fontElements = document.querySelectorAll(".fontTheme");
    fontElements.forEach((fontElement) => {
        const style = fontElement.style;
    });
    menuElement.addEventListener("onmouseover", () => {
        menuElement.style.backgroundColor = "rgb(30,30,30)";
        menuElement.style.color = "#d5d5d5";
    });
};

applyLightMode();

const applyDarkMode = () => {
    const elements = document.querySelectorAll(".theme");
    elements.forEach((element) => {
        const style = element.style;
        style.backgroundColor = "#171010";
        style.color = "#d5d5d5";
    });

    const fontElements = document.querySelectorAll(".fontTheme");
    fontElements.forEach((fontElement) => {
        const style = fontElement.style;
        style.color = "rgb(30,30,30)";
    });
};

const darkModeToggle = document.querySelector(".darkModeToggle");

darkModeToggle.addEventListener("change", (e) => {
    const checked = e.target.checked;
    if (checked) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

const homeButton = document.querySelector(".homeButton");
const aboutButton = document.querySelector(".aboutButton");
const skillsButton = document.querySelector(".skillsButton");
const contactButton = document.querySelector(".contactButton");

homeButton.addEventListener("click", () => {
    if (window.location.href !== "/index.html") {
        window.location.href = "/index.html";
    }
});
aboutButton.addEventListener("click", () => {
    window.location.href = "/about/index.html";
});
skillsButton.addEventListener("click", () => {
    window.location.href = "/skills/index.html";
});
contactButton.addEventListener("click", () => {
    window.location.href = "/contact/index.html";
});

const menuButton = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown-content");

menuButton.addEventListener("click", () => {
    // handle opening and closing of hamburger menu
    if (menuButton.classList.contains("open")) {
        menuButton.classList.remove("open");
        dropdown.style = "display: none";
    } else {
        menuButton.classList.add("open");
        dropdown.style = "display: block";
    }
});

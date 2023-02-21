// Menu Data Structure
//* Task 3.0
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//* Task 1.0
const mainEl = document.querySelector("main");

//* Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

//* Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1> ";

//* Task 1.3
mainEl.classList.add("flex-ctr");

//* Task 2.0
const topMenuEl = document.getElementById("top-menu");

//* Task 2.1
topMenuEl.style.height = "100%";

//* Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//* Task 2.3
topMenuEl.classList.add("flex-around");

//* Task 3.1
for (var i = 0; i < menuLinks.length; i++) {
  var linkEl = document.createElement("a");
  linkEl.setAttribute("href", menuLinks[i].href);
  linkEl.textContent = menuLinks[i].text;
  topMenuEl.appendChild(linkEl);
}

// Create new anchor element    // Set href attribute to link object's href property    // Set the new element's content to the value of the text property of the link object    // Append the new element to the topMenuElelement

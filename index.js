// Menu Data Structure
//* Task 3.0 & Task 5.0
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

// done w/ group
// for (let i = 0; i < menuLinks.length; i++) {
//   let linkEl = document.createElement("a");
//   linkEl.setAttribute("href", menuLinks[i].href);
//   linkEl.textContent = menuLinks[i].text;
//   topMenuEl.appendChild(linkEl);
// }

// Solution Code Along
menuLinks.forEach((menuObj) => {
  // Create an <a>element.
  const a = document.createElement("a");

  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.setAttribute("href", menuObj.href);

  // Set the new element's content to the value of the text property of the "link" object.
  a.textContent = menuObj.text;
  // Append the new element to the topMenuElelement.
  topMenuEl.appendChild(a);
});

//* ================================= Day 2 =====================================
//* Task 4.0
const submenuEl = document.getElementById("sub-menu");

//* Task 4.1
submenuEl.style.height = "100%";

//* Task 4.2
submenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//* Task 4.3
submenuEl.classList.add("flex-around");

//* Task 4.4
submenuEl.style.position = "absolute";

//* Task 4.5
submenuEl.style.top = "0";

//* Task 5.1
const topMenuLinks = document.querySelectorAll("a");

const showingSubMenu = false;

//* Task 5.2 - half completed
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName.toLowerCase() !== "a") {
    console.log(event.target.tagName.toLowerCase());
    return;
  }
  console.log(event.target.innerText);

  //* Task 5.3
  if (event.target.classList.includes("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    submenuEl.style.top = "0";
    return;
  }

  //* Task 5.4
  event.target.classList.remove("active");
});

// topMenuLinks.forEach((link) => {
//   link.classList.remove("active");
// });

// event.target.classList.add("active");
// // showingSubMenu = true;

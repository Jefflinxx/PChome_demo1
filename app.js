let navs = document.querySelectorAll("li");
let d2 = document.querySelectorAll("#d2 a");

navs.forEach((nav) => {
  nav.addEventListener("mouseenter", (e) => {
    document.querySelector(".active").classList.remove("active");
    nav.classList.add("active");

    document.querySelector("#d2 a:not(.unblock)").classList.add("unblock");
    let index = Array.from(navs).indexOf(nav);
    d2[index].classList.remove("unblock");
  });
});

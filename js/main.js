var currentactive = document.querySelector(".mobile__menu__item > .active"),
    allmobilemenu = document.querySelectorAll(".mobile__menu__item");
allmobilemenu.forEach((e, t) => { allmobilemenu[t].addEventListener("click", () => { currentactive.classList.remove("active"), currentactive = allmobilemenu[t], allmobilemenu[t].classList.add("active") }) });
var currentactive2 = document.querySelector(".big__menu__item.active"),
    allmobilemenu2 = document.querySelectorAll(".big__menu__item");
allmobilemenu2.forEach((e, t) => { allmobilemenu2[t].addEventListener("click", () => { currentactive2.classList.remove("active"), currentactive2 = allmobilemenu2[t], allmobilemenu2[t].classList.add("active") }) });
var sections = document.querySelectorAll("#overview,#contagion,#symptoms,#prevention");
window.addEventListener("scroll", () => { var l = document.documentElement.scrollTop;
    sections.forEach(t => { var e = t.id,
            e = document.getElementById(e).getBoundingClientRect();
        e.top <= l && e.top + e.height > l && document.querySelectorAll(".big__menu__item > a").forEach(e => { e.parentElement.classList.remove("active"), -1 !== e.href.indexOf(t.id) && e.parentNode.classList.add("active") }) }) });
var menuicon = document.querySelector(".mobile__nav"),
    mobilemenu = document.querySelector(".mobile__menu"),
    clickcnt = 0;
menuicon.addEventListener("click", () => { clickcnt % 2 == 0 ? (mobilemenu.style.left = "0", menuicon.classList.add("tog")) : (mobilemenu.style.left = "-100vw", menuicon.classList.remove("tog")), clickcnt++ });
var lastScrollTop = 0,
    header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", () => { var e = document.documentElement.scrollTop;
    lastScrollTop < e || 0 == e ? header.classList.remove("stickymenu") : header.classList.add("stickymenu"), lastScrollTop = e });
var datebox = document.querySelector("#date"),
    year = (new Date).getFullYear();
datebox.innerHTML = year;
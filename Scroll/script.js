//set date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// close link

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// Fixed nav bar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');



window.addEventListener("scroll", function() {
   const scrollHeight = window.scrollY;
   const navHeight = navbar.getBoundingClientRect().height;

   if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
   } else {
    navbar.classList.remove('fixed-bar');
   }

   if (scrollHeight > 500) {
    topLink.classList.add("show-links");
   } else {
    topLink.classList.remove("show-links");
   }
});

// **************smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function (e) {
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav){
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0, top: position,
        });

        linksContainer.style.height = 0;

    });
});
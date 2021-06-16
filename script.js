const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-link')
const progress = document.querySelector('.progress-bars-wrapper')
const ar = [70, 70, 90, 90, 25]

window.addEventListener("scroll", () => {
    mainFunc();
});

const mainFunc = () => {
    if (window.pageYOffset >= navbarOffsetTop)
        navbar.classList.add("sticky")
    else
        navbar.classList.remove("sticky")

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change")
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progess-percent").forEach((el, i) => {
            el.style.width = `${ar[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = ar[i];
        });
    }
}

mainFunc();

window.addEventListener('resize', () => {
    window.location.reload();
})
const fourthMiddle = document.getElementById('4_1');
const header = document.getElementById('headerBar');

window.onscroll = (e) => {
    let scrollDown = Math.round(window.scrollY);
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset;
        if (st > lastScrollTop) {
            // Down 
            // Header -----
            if (scrollDown > 400 && screen.width > 800) {
                header.style.height = '0px';
            } else if (scrollDown < 400 && screen.width > 800) {
                header.style.height = '10rem';
            }
            // Header End---

        } else {
            // Up 

        }
        lastScrollTop = st <= 0 ? 0 : st;

    }, false);
}

// Header 
const bar = document.getElementById('bar');
const headerBar = document.getElementById('headerBar');
const navbar = document.getElementById('navbar');
const navbarUl = document.getElementById('navbarUl');
bar.onclick = () => {
    headerBar.classList.toggle('active');
    navbar.classList.toggle('active');
    navbarUl.classList.toggle('active');
};




// Removing AOS for Mobile device
const secondFirstCon = document.querySelector('.second_cont_firstPart');
const secondsecondCon = document.querySelector('.second_cont_secondPart');
const screenXX = screen.width;

if (screenXX < 800) {
    secondFirstCon.removeAttribute('data-aos');
    secondsecondCon.removeAttribute('data-aos');
};

/* ----------x------------------x-----------------x---------------x----------------------Index End------------------------x-----------------------x--------------------x---------- */
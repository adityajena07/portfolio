let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');  // Use querySelectorAll to select all sections
let navlinks = document.querySelectorAll('header nav a');  // Use querySelectorAll to select all nav links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                links.classList.remove('active');  // Remove 'active' class from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')  // Add 'active' class to the correct link
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

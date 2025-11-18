// This function will run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select the hamburger icon and the navigation links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'nav-active' class on the nav-links
        // This will slide the menu in and out
        navLinks.classList.toggle('nav-active');

        // Toggle the 'toggle' class on the hamburger icon
        // This will animate the hamburger into an 'X'
        hamburger.classList.toggle('toggle');
    });

    // Bonus: Close the mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

});
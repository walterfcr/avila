$(document).ready(function() {
    // Initialize smooth scrolling
    smoothScroll.init({
        selector: '[data-scroll]', // Links with the data-scroll attribute
        speed: 300, // 0.3 seconds scroll speed
        easing: 'easeInQuart' // Easing function
    });

    // Hide the ScrollTop button on page load
    $('#flechabtn').hide(); 

    // Scroll event to show/hide the ScrollTop button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $('#flechabtn').fadeIn(); // Show the button with fade effect
        } else {
            $('#flechabtn').fadeOut(); // Hide the button with fade effect
        }
    });

    // Smooth scroll to top functionality
    $('#flechabtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600); // 600ms scroll to top
    });
});
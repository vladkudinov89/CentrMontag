
;(function () {


    $(document).ready(function () {

        $(".class .owl-carousel").owlCarousel({

            items: 1,

            navigation:true,
            pagination:true,
            nav: true,
            loop: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


        // Add smooth scrolling on all links inside the navbar
        $("#myNavbar a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    /* window.location.hash = '';*/

                });
                $(".navbar-collapse").collapse('hide');
            }  // End if
        });

    })
})();
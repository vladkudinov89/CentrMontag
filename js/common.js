
;(function () {



    $(document).ready(function () {


        var canvas = document.getElementById('ben-canvas');
        var context = canvas.getContext('2d');

        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = '#ffbe20';

        //рисуем по OY
        context.moveTo(40,40);
        context.lineTo(40,canvas.height - 80);
        context.stroke();


        //рисуем по OX
        context.moveTo(40,40);
        context.lineTo(canvas.height - 80,40);
        context.stroke();


        context.closePath();

        $("#object__slider").owlCarousel({

            items: 1,
            nav: true,
            loop: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
         /*   animateOut: 'fadeOut',

            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1
                }
            }*/
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
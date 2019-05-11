$(function () {
    'use strict';


    // start navbar
    function navbarScrollCheck() {
        
        if($(window).scrollTop()){
            $('header').addClass('bg-dark');
            $(".nav-contact").hide(1000);
            $('nav.navbar .container').css({
                borderWidth:'0',
                padding:'5px 0'
            });
        }else {
            $('header').removeClass('bg-dark');
            $(".nav-contact").show(1000);
            $('nav.navbar .container').css({
                borderWidth: '2px',
                padding: '10px 30px'
            });
        }

    }

    navbarScrollCheck();

    $(window).on('scroll',navbarScrollCheck);

    $('nav.navbar .navbar-nav li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // end navbar


});




// Start our services


let files = document.querySelectorAll('.files .file');
files[files.length - 1].classList.add('active');
files.forEach(element => {
    element.addEventListener('click', function (e) {
        files.forEach(element => {
            element.classList.remove('active');
        });
        this.classList.add('active');
    })
})

//End our services

// Start AOS

function animate(elements, dataValue, options = {}, dataName = 'data-aos') {
    var dataAni = 0;
    elements = document.querySelectorAll(elements);
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute(dataName, dataValue);
        if (options.hasOwnProperty('dataName')) {
            dataAni++;
            elements[i].setAttribute(options.dataName, (dataAni * 250).toString());
        }
    }
}

animate('.helpful  .card', 'flip-up',{dataName:"data-aos-delay"});
animate('.files ', 'fade-right');
animate('#contact-us form ', 'fade-right');
animate('#contact-us .other ', 'fade-left');
animate('#contact-us .contact-us-welcome ', 'fade-down');
animate('#contact-us >a ', 'flip-left');
animate('.section-title', 'fade-up');





// End AOS

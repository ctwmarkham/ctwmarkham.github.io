var main = function () {
    //setting up mobile menu
    //$("#myMenu").css("height", window.innerHeight);

    //$("#myMenu").css("width", window.innerWidth);

    //making events square
    var cw = $('.squareDiv').width();
    $('.squareDiv').css({
        'height': cw + 'px'
    });
    
    var cw = $('.square').width();
    $('.square').css({
        'height': cw + 'px'
    });

    //making rectDiv rectangular
    //var cw = $('.rectDiv').width()*2;
    //$('.rectDiv').css({
    //    'height': cw + 'px'
    //});

    //making rectDiv same height as window
    $('.rectDiv').css("height", window.innerHeight);

    //setting jumbotron height
    $("#jumbotronFull").css("height", window.innerHeight);

    //setting longHorizontal height
    $('.longHorizontal').height($('.squareDiv').height());

    //setting when background should change
    var changePoint = ($('#jumbotronFull').offset().top + $('#jumbotronFull').height() * 0.9);

    $(window).on('scroll', function () {
        //top of the screen
        var top = Math.round($(window).scrollTop());

        //if past changePoint, change the style
        if (top > changePoint) {
            $(".topnav").addClass('changeStyle');
            $(".whiteLogo").addClass('logo');
            $('.hamburger').addClass('hChangeStyle');
            // document.getElementById('logo').src = 'img/logo-big2.svg'


        } else if (top < changePoint) {
            $('.topnav').removeClass('changeStyle');
          $(".whiteLogo").removeClass('logo');  $('.hamburger').removeClass('hChangeStyle');
            //document.getElementById('logo').src = 'img/logo-big.svg'
        }

        //setting up mobile menu
        $("#myMenu").css("height", window.innerHeight);

        $("#myMenu").css("width", window.innerWidth);

    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

}

$(document).ready(main);


//opening the mobile menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//modal script
var vtitle = [
            "Tree Planting"
        ]
var vtext = [
            "Enjoy a whole day in the great Canadian outdoors. This is a great opportunity to not only learn about the environment, but truly appreciate it. Breath in the lush earthy air of the forest and get your hands dirty planting some saplings!",
        ]
var vhref = [
            "mailto:tempEmail?Subject=Event Title &body=Full Name:"
        ]
var modal = document.getElementById("mySideBar");

function moreInfo(num) {
    $("#mTitle").text(vtitle[num]);
    $("#mText").text(vtext[num]);
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("sendRequest").setAttribute("href", vhref[num]);
    // modal.style.display = "block";
}

function closeBar() {
    document.getElementById("mySidebar").style.width = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// When the user clicks the button, open the modal 
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        $("#myModal").fadeToggle(500);
    }
}

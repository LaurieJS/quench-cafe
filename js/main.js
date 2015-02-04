/**
 * Quench Cafe
 *Laurie Shuck
 * January 29, 2015
 */


$(document).ready(function() {

    //Home page image slider  Anything Slider
    if ($("body#home").length) {
        //Home Page slider
        $('#slider').anythingSlider({
            theme: 'minimalist-round',
            mode: 'fade',
            buildNavigation: true,
            infiniteSlides: true,
            autoPlay: true,
            delay: 3500
        });
    }//end of Anything Slider


    //Shadowboxes for the galleries
    if ($("body#coffees").length || $("body#floats").length || $("body#healthy_drinks").length
        || $("body#shakes").length || $("body#slushes").length || $("body#smoothies").length
        || $("body#softdrinks").length || $("body#teas").length){
        Shadowbox.init({
            continuous: true
        });
    }//end of Shadowbox

});


//Window.onload function
window.onload = function(){


    //Home page image slider  Anything Slider
    //if ($("body#home").length) {
        //Home Page slider
        //$('#slider').anythingSlider({
            //theme: 'minimalist-round',
            //mode: 'fade',
            //buildNavigation: true,
            //infiniteSlides: true,
            //autoPlay: true,
            //delay: 3500
        //});
    //}//end of Anything Slider







    if ($("body#locations").length) {
        //******Code for the jHere map******/
        //************Hayward**************/
        var map1 = document.getElementById("mapHayward");

        if (map1) {
            //jHere map code
            $("#mapHayward").jHERE({
                enable: ["behavior"],
                center: [37.661073, -122.073976],
                zoom: 14
            }).jHERE('marker', [37.661073, -122.073976], {
                icon: 'images/quench_icon_maps.svg',
                anchor: {x: 10, y: 50},
                click: function () {
                    alert('Howdy from Hayward!');
                }
            });//end of the jHere code
        }//end of the if statement

        //************San Jose**************/
        var map2 = document.getElementById("mapSanJose");

        if (map2) {
            //jHere map code
            $("#mapSanJose").jHERE({
                enable: ["behavior"],
                center: [37.409647, -121.94492],
                zoom: 14
            }).jHERE('marker', [37.409647, -121.94492], {
                icon: 'images/quench_icon_maps.svg',
                anchor: {x: 10, y: 50},
                click: function () {
                    alert('Howdy from San Jose!');
                }
            });//end of the jHere code
        }//end of the if statement

        //************San Mateo**************/
        var map3 = document.getElementById("mapSanMateo");

        if (map3) {
            //jHere map code
            $("#mapSanMateo").jHERE({
                enable: ["behavior"],
                center: [37.549001, -122.310924],
                zoom: 14
            }).jHERE('marker', [37.549001, -122.310924], {
                icon: 'images/quench_icon_maps.svg',
                anchor: {x: 10, y: 50},
                click: function () {
                    alert('Howdy from San Mateo!');
                }
            });//end of the jHere code
        }//end of the if statement
    }//end of the JHere maps


};//end of the window.onload function


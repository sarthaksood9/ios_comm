$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    let heading_ani = new ScrollMagic.Scene({
        triggerElement:'#heading'
    })
    .setClassToggle('#heading','fade_up_in')
    .addTo(controller);
    heading_ani.offset(-200);
    
    let text_ani = new ScrollMagic.Scene({
        triggerElement:'.left_text'
    })
    .setClassToggle('.left_text','fade_in_right')
    .addTo(controller);
    text_ani.offset(-100);

    let image_ani = new ScrollMagic.Scene({
        triggerElement:'.right_img'
    })
    .setClassToggle('.right_img','fade_in_left')
    .addTo(controller);
    image_ani.offset(-200);




    

});
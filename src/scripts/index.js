import 'bootstrap';
import * as $ from 'jquery';
window.$ = $;
import AOS from 'aos';
require('../stylesheets/index.scss');
import DdInputContainer from "./modules/InputContainer";
$(() => $(".dd-input-container").each((i,e) => new DdInputContainer(e)));
$(document).on("click",".dd-scroll-to", function(){
    let $this = $(this).closest(".dd-scroll-to");
    let target = $this.attr("href") || $this.data("target");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
    }, 1000);
});
AOS.init({
    duration:900,
    once: true,
    disable: 'mobile'
});

require("./partials/_shelf");
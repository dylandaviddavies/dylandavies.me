import 'bootstrap';
import * as $ from 'jquery';
require('../stylesheets/index.scss');
import DdInputContainer from "./modules/InputContainer";
$(() => $(".input-container").each((i,e) => new DdInputContainer(e)));
$(() => $(".dd-scroll-to").click(e => {
    e.preventDefault();
    let $this = $(e.target);
    let target = $this.attr("href") || $this.data("target");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
    }, 1000);
}));
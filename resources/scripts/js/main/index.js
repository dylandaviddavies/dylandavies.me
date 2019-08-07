import * as $ from 'jquery';
require('../../../stylesheets/sass/main/index.scss');
import DdInputContainer from "./modules/InputContainer";
document.querySelectorAll(".input-container").forEach(ic => new DdInputContainer(ic));
$(document).on("click", ".next-section-btn", function(){
    $('html,body').animate({
        scrollTop: $(this).parents(".section").next().offset().top},
        'slow');
});
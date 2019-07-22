require('../../stylesheets/sass/index.scss');
import DdInputContainer from "./modules/InputContainer";
import DdNav from "./modules/Nav";
document.querySelectorAll(".input-container").forEach(ic => new DdInputContainer(ic));
new DdNav(document.querySelector(".nav"));
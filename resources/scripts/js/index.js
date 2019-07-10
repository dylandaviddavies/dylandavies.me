require('../../stylesheets/sass/index.scss');
import DdInputContainer from "./modules/InputContainer";
document.querySelectorAll(".input-container").forEach(ic => new DdInputContainer(ic));
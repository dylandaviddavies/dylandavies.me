export default class Nav {
    constructor(el){
        this.el = el;
        this.items = el.querySelector(".nav__items");
        this.expand = el.querySelector(".nav__expand");
        this.init();
    }
    init() {
        var self = this;
        this.expand.addEventListener("click", () => {
            let icon = self.expand.querySelector(".nav__expand__icon");
            if (self.el.classList.contains("nav--expanded")) {
                self.el.classList.remove("nav--expanded");
                icon.innerText = "menu";
            }
            else {
                self.el.classList.add("nav--expanded");
                icon.innerText = "close";
            }
        });
    }
}
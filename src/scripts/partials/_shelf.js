function toggleShelf($shelf, toggle = !$shelf.hasClass("dd-shelf--visible")){
    let $btns = $("[aria-controls=" + $shelf.attr("id") + "]");
    $btns.attr("aria-expanded", toggle);
    $shelf.attr("aria-hidden", !toggle);
    $shelf.toggleClass("dd-shelf--visible", toggle);
    if (toggle) $shelf.focus();
    setTimeout(() => $("body").toggleClass("dd-overflow-hidden", toggle), toggle ? 0 : 400);
 }
 $(document).on("click", ".dd-shelf__open-btn", function() {
     let $shelf = $("#" + $(this).attr('aria-controls'));
     toggleShelf($shelf, true);
 });
 $(document).on("click", ".dd-shelf__toggle-btn", function() {
     let $shelf = $("#" + $(this).attr('aria-controls'));
     toggleShelf($shelf);
 });
 $(document).on("click", ".dd-shelf__close-btn", function(){
    let $shelf = $("#" + $(this).attr('aria-controls'));
    toggleShelf($shelf, false);
 });
$(document).on("mouseup", ".dd-shelf--visible", function(e) {
    let $this = $(this);
    let $drawer = $this.children(".dd-shelf__drawer");
    if (!$drawer.is(e.target) && !$drawer.has(e.target))
        $this.removeClass("dd-shelf--visible");
});
$(document).keyup(e => {
    if (e.key === "Escape") { 
        $(".dd-shelf").each(function () {
            toggleShelf($(this), false);
        });
   }
});
function init() {
    blockContextMenu();
}

//It's not necessary, but don't show others options from context menu 
function blockContextMenu() {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        return false;
    }, false);
}
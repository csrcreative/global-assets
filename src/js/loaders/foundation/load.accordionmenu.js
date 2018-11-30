let loadAccordionMenu = () => {
    let accordionMenu = document.querySelectorAll(".accordion-menu").length
        ? document.querySelectorAll(".accordion-menu")
        : false;

    if (accordionMenu !== false) {

        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "accordionmenu" */ `foundation-sites/js/foundation.accordionMenu.js`).then(
                plugin => {
                    Foundation.plugin(plugin.AccordionMenu, "AccordionMenu");
                    $(accordionMenu).foundation();
                }
            );
        };

        _init();
    }
};
export default loadAccordionMenu;

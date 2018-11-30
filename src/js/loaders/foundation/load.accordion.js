const loadAccordion = () => {
    //let accordion = document.querySelector(".accordion-item") || false;

    let accordion = document.querySelectorAll(".accordion").length
    ? document.querySelectorAll(".accordion")
    : false;

    if (accordion !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "accordion" */ `foundation-sites/js/foundation.accordion.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Accordion, "Accordion");
                    $(accordion).foundation();
                }
            );
        };

        _init();
    }
}
export default loadAccordion;
import breakpoints from "../../components/breakpoints";

let loadSticky = () => {
    let sticky = document.querySelectorAll(".sticky, [data-sticky-container]").length
        ? document.querySelectorAll(".sticky, [data-sticky-container]")
        : false;
    
    // stickyStart is an optional min breakpoint set in the markup for sticky elements
    let stickyStart = document.querySelectorAll("[data-sticky-on]").length
        ? breakpoints[document.querySelectorAll("[data-sticky-on]")[0].getAttribute("data-sticky-on")]
        : null;

    if (stickyStart !== null) {
        stickyStart = (window.innerWidth >= stickyStart) ? true : false;
    }

    if (sticky !== false && (stickyStart || stickyStart === null)) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "sticky" */ `foundation-sites/js/foundation.sticky.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Sticky, "Sticky");
                    $(sticky).foundation();
                }
            );
        };

        _init();
    }
};
export default loadSticky;

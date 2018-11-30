let loadOffCanvas = () => {
    let offCanvas = document.querySelectorAll(".off-canvas").length
        ? document.querySelectorAll(".off-canvas")
        : false;
        
    if (offCanvas !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "offcanvas" */ `foundation-sites/js/foundation.offcanvas.js`).then(
                plugin => {
                    Foundation.plugin(plugin.OffCanvas, "OffCanvas");
                    $(offCanvas).foundation();
                }
            );
        };

        _init();
    }
};
export default loadOffCanvas;

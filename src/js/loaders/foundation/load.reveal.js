let loadReveal = () => {
    let reveal = document.querySelectorAll(".reveal").length
        ? document.querySelectorAll(".reveal")
        : false;
   
    //Modal Plugin
    if (reveal !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "reveal" */ `foundation-sites/js/foundation.reveal.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Reveal, "Reveal");
                    //initializing the plugin
                    $(reveal).foundation();
                }
            );
        };

        _init();
    }
};
export default loadReveal;

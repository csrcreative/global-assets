let loadOrbit = () => {
    let orbit = document.querySelectorAll(".orbit").length
        ? document.querySelectorAll(".orbit")
        : false;

    if (orbit !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "orbit" */ "foundation-sites/js/foundation.orbit").then(
                plugin => {
                    Foundation.plugin(plugin.Orbit, "Orbit");
                    $(orbit).foundation();
                }
            );
        };

        _init();
    }
};

export default loadOrbit;

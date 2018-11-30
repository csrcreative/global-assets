let loadDrilldown = () => {
    let drilldown = document.querySelectorAll(".drilldown").length
        ? document.querySelectorAll(".drilldown")
        : false;

    if (drilldown !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "drilldown" */ `foundation-sites/js/foundation.drilldown.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Drilldown, "Drilldown");
                    $(drilldown).foundation();
                }
            );
        };

        _init();
    }
};
export default loadDrilldown;
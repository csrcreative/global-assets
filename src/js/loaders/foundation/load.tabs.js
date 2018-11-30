let loadTabs = () => {
    let tabs = document.querySelectorAll(".tabs").length
        ? document.querySelectorAll(".tabs")
        : false;

    if (tabs !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "tabs" */ `foundation-sites/js/foundation.tabs.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Tabs, "Tabs");
                    $(tabs).foundation();
                }
            );
        };

        _init();
    }
};
export default loadTabs;

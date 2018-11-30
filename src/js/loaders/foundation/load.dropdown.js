const loadDropdown = () => {
    let dropdown = document.querySelectorAll(".dropdown-pane").length
        ? document.querySelectorAll(".dropdown-pane")
        : false;

    if (dropdown !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "dropdown" */ `foundation-sites/js/foundation.dropdown.js`).then(
                plugin => {
                    Foundation.plugin(plugin.Dropdown, "Dropdown");
                    $(dropdown).foundation();
                }
            );
        };

        _init();
    }
};
export default loadDropdown;

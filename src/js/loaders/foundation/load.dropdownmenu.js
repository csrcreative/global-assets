const loadDropdownMenu = () => {
    let dropdownMenu = document.querySelectorAll(".dropdown, .menu").length
        ? document.querySelectorAll(".dropdown, .menu")
        : false;

    if (dropdownMenu !== false) {
        let _init = () => {
            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "dropdownmenu" */ `foundation-sites/js/foundation.dropdownMenu.js`).then(
                plugin => {
                    Foundation.plugin(plugin.DropdownMenu, "DropdownMenu");
                    $(dropdownMenu).foundation();
                }
            );
        };

        _init();
    }
};
export default loadDropdownMenu;
let loadShareDialog = () => {
    let social = document.querySelectorAll(".sharing-link-hm").length
        ? document.querySelectorAll(".sharing-link-hm")
        : false;

    if (social !== false) {
        let _init = () => {
            //Only load on mouseover. Not necessary on mobile.
            document.body.addEventListener("mouseover", _handler);
        };

        let _handler = (e) => {
            if(e.target.classList.contains('sharing-link-hm')) {
                _importPlugin();

                document.body.removeEventListener("click", _handler);
            }
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "sharing" */ `../components/share-dialog.js`);
        };

        _init();
    }
};
export default loadShareDialog;

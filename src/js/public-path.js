if (typeof cdnAssetsUrl === 'undefined') {
    // cdnAssetsUrl is undefined, fallback to local domain alias
    if (domain == 'demos') {
        __webpack_public_path__ = 'http://assets:3000/dev/';
    } else {
        __webpack_public_path__ = document.domain + '/_hermes_assets/dist/';
    }
} else {
    // cdnAssetsUrl is defined
    if (document.domain == 'demos' || document.domain == 'localhost') {
        __webpack_public_path__ = cdnAssetsUrl + '/dev/';
    } else {
        __webpack_public_path__ = cdnAssetsUrl + '/dist/';
    }
}
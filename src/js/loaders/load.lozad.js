let loadLazyLoader = () => {
    let lazyloader = document.querySelectorAll(".lazy-hm, .lazy-picture-hm").length
        ? document.querySelectorAll(".lazy-hm, .lazy-picture-hm")
        : false;

    let isIE = typeof document !== 'undefined' && document.documentMode;

    if (lazyloader !== false) {
        let _init = () => {
            //If IntersectionObserver not supported, load the polyfill
            if (!("IntersectionObserver" in window)) {
                var script = document.createElement("script");
                script.src =
                    "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver";
                document.getElementsByTagName("head")[0].appendChild(script);
            }

            _importPlugin();
        };

        let _importPlugin = callback => {
            import(/* webpackChunkName: "lozad" */ `lozad`)
                .then(lozad => {
                    let observer = lozad.default(".lazy-hm", {
                        threshold: 0.1, // ratio of element convergence
                        loaded: function(el) {
                            // Custom implementation on a loaded element
                            el.classList.add("lazy-loaded-hm");
                        }
                    });

                    let pictureObserver = lozad.default(".lazy-picture-hm", {
                        threshold: 0.1, // ratio of element convergence,
                        load: function(el) {
                            let sources = el.getElementsByTagName("source");
                            let img = document.createElement("img");

                            if (isIE && el.getAttribute('data-iesrc')) {
                                img.src = el.getAttribute('data-iesrc');
                            }

                            img.setAttribute(
                                "alt",
                                el.getAttribute("data-alt")
                            );

                            for (let i = 0; i < sources.length; i++) {
                                let src = sources[i].getAttribute(
                                    "data-srcset"
                                );
                                sources[i].setAttribute("srcset", src);
                            }

                            el.appendChild(img);
                        },
                        loaded: function(el) {
                            // Custom implementation on a loaded element
                            el.classList.add("lazy-loaded-hm");
                        }
                    });

                    observer.observe();
                    pictureObserver.observe();
                })
                .catch(err => console.log(err));
        };

        _init();
    }
};
export default loadLazyLoader;

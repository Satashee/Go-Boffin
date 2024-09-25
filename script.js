    function loading() {
        var tl = gsap.timeline();
        tl.to("#yellow1", {
            top: "-100%",
            delay: 0.5,
            duration: 0.5,
            ease: "expo.out"
        });
        tl.from("#yellow2", {
            top: "100%",
            delay: 0.5,
            duration: 0.5,
            ease: "expo.out"
        }, "anim");
        tl.to("#loader video", {
            top: "-100%",
            delay: 0.5,
            duration: 0.5,
            ease: "expo.out"
        });
        tl.to("#loader h1", {
            delay: 0.6,
            duration: 0.5,
            color: "black"
        }, "anim");
        tl.to("#loader", {
            opacity: 0
        });
    }
    loading();

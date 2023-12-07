gsap.to("#movingRV", {
    duration: 16,
    motionPath: {
      path: "#road-path",
      align: "#road-path",
      alignOrigin: [0.5, 0.5],
      autoRotate: 270,
    },
    scale: 1,
    repeat: -1,
    ease: "sine.inOut"
  });

  
  gsap.set("#whole-pin", {y: -150});
  gsap.to("#whole-pin", {
    duration: 1.25,
    y: 0,
    delay: 2.5, 
    ease: "bounce.out"
  });

  gsap.set("#pin-tab", {x: 1000});
  gsap.to("#pin-tab", {
    duration: .9,
    x: 0,
    delay: 1.51,
    ease: "power1.out"
  });


  gsap.set("#logo", {scale: 0, transformOrigin: "center"});
  gsap.to("#logo", {
    duration: 1.25,
    scale: 1,
    delay: 3.25,
    ease: "power1.out"
  });

  gsap.set("#on-site-text", {scale: 0, transformOrigin: "center"});
  gsap.to("#on-site-text", {
    duration: 1.25,
    scale: 1,
    delay: 3.5,
    ease: "power1.out"
  });

  gsap.set("#learn-more-button", {scale: 0, transformOrigin: "center"});
  gsap.to("#learn-more-button", {
    duration: 1.25,
    scale: 1,
    delay: 4,
    ease: "power1.out"
  });
  
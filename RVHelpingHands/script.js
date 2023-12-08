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
  
  gsap.set("#phone-icon", {y: -150, scale: 0, transformOrigin: "center"});
  gsap.set("#call-sign-post", {scale: 0, transformOrigin: "0px -50px"});
  gsap.set("#call-sign-shadow", {scale: 0, transformOrigin: "center"});
  gsap.set("#email-sign-shadow", {scale: 0, transformOrigin: "center"});
  gsap.set("#email-icon", {y: -150, scale: 0, transformOrigin: "center"});
  gsap.set("#email-sign-post", {scale: 0, transformOrigin: "0px -50px"});
  
  gsap.to("#call-sign-shadow", {
    scrollTrigger: "#call-sign-shadow",
    scale: 1,
  });
  gsap.to("#phone-icon", {
    scrollTrigger: "#call-sign-shadow",
    duration: 2,
    y: 0,
    scale: 1,
    ease: "bounce.out"
  });
  gsap.to("#call-sign-post", {
    scrollTrigger: "#call-sign-shadow",
    scale: 1,
  });

  gsap.to("#email-sign-shadow", {
    scrollTrigger: "#email-sign-shadow",
    scale: 1,
  });
  gsap.to("#email-icon", {
    scrollTrigger: "#email-sign-shadow",
    duration: 2,
    y: 0,
    scale: 1,
    ease: "bounce.out"
  });
  gsap.to("#email-sign-post", {
    scrollTrigger: "#email-sign-shadow",
    scale: 1,
  });

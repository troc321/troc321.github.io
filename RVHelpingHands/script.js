gsap.to("#movingRV", {
    duration: 18,
    motionPath: {
      path: "#road-path",
      align: "#road-path",
      alignOrigin: [0.5, 0.5],
      autoRotate: 270,
    },
    scale: 1,
    repeat: -1,
    repeatDelay: 0,
    ease: "sine.inOut"
  });

  
  gsap.set("#whole-pin", {y: -100});

  gsap.to("#whole-pin", {
    duration: 2,
    y: "0",
    ease: "bounce.out"
  })
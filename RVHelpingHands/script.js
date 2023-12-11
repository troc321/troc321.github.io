// GSAP STUFF
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
    scrollTrigger: "#pin-tab", 
    duration: .9,
    x: 0,
    delay: 1.51,
    pin: true,
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
  
  gsap.set("#phone-icon", {scale: 0, transformOrigin: "center"});
  gsap.set("#email-icon", {scale: 0, transformOrigin: "center"});
  
  gsap.to("#phone-icon", {
    scrollTrigger: "#email-sign-shadow",
    duration: 2,
    delay: 1.75,
    scale: 1,
    rotate: 360,
    ease: "power1.out"
  });
  
  gsap.to("#email-icon", {
    scrollTrigger: "#email-sign-shadow",
    duration: 2,
    delay: 1.75,
    scale: 1,
    rotate: 360,
    ease: "power1.out"
  });

  gsap.set("#next-stop-sign", {x: -300, opacity: 0});
  gsap.to("#next-stop-sign", {
    scrollTrigger: "#next-stop-sign-shadow",
    duration: 1.25,
    x: 20,
    opacity: 1,
    ease: "bounce.out"
  });
  //GSAP STUFF

  //JS STUFF
  function callNumber() {
    var phoneNumber = '5854549408'; // Replace with the desired phone number
    window.location.href = 'tel:' + phoneNumber;
  }

  function openEmailApp() {
    // Change the email address to the desired recipient
    var emailAddress = 'mike@rvhelpinghands.com';
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + emailAddress;

    // Open the default email client
    window.location.href = mailtoLink;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var loadingScreen = document.getElementById("loading-screen");
    var loadingVideo = document.getElementById("loading-video");

    loadingVideo.play();
    // Set the duration for the video to play in milliseconds (e.g., 5000ms for 5 seconds)
    var videoDuration = 1550;

    // Hide the loading screen after the specified duration
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, videoDuration);
});
//JS STUFF

  


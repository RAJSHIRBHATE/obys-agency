function loadingAnimation() {
  var tl = gsap.timeline();

  gsap.from(".line h1, h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
    ease: "power4.out"
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 35);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
    onComplete: function(){
      gsap.set(".line h2",{opacity: 1});
    }
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
    onComplete: function (){
      document.querySelector(".line h2").style.opacity = "1";
      document.querySelector(".line h2").style.visibility = "visible";

    }
    
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none ",
  });

  tl.from("#nav",{
	opacity: 0
  })

  tl.from("#hero1 h1,#hero2 h1, #hero3 h2 , #hero4 h1",{
    y: 120,
    stagger:0.2
    })
}



function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();

cursorAnimation();

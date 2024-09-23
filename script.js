var tl = gsap.timeline()

gsap.from(".line h1, h2", {
	y: 150,
    stagger: 0.25,
	duration: 0.6,
	delay: 0.5
})

tl.from("#line1-part1", {
	opacity: 0,
	onStart: function(){
		var h5timer = document.querySelector("#line1-part1 h5");
		var grow = 0;

		setInterval(function() {
			if(grow < 100) {
				h5timer.innerHTML = grow++
			} else {
				h5timer.innerHTML = grow
			}
		}, 35);
	}
})

tl.to(".line h2", {
	animationName: "anime",
	opacity: 1
})

tl.to("#loader",{
	opacity: 0,
	duration: 0.2,
	delay: 4,
	ease: Power4
})

tl.from("#page1", {
	delay: 0.2,
	y:1600,
	y: 1200,
	duration: 0.5,
	opacity: 0
})

tl.to("#loader", {
	display:"none "
})
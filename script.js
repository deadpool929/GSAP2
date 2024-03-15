gsap.from(".page1 h1", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page1 h1",
    scroll: "body",
    markers: true,
    start: "top 40%",
    end: "bottom 20%",
    scrub: 2,
  },
});

gsap.from(".page2 h1", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page2 h1",
    scroll: "body",
    markers: true,
    start: "top 60%",
    end: "bottom 20%",
    scrub: 2,
  },
});

gsap.from(".page3 h1", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page3 h1",
    scroll: "body",
    markers: true,
    start: "top 60%",
    end: "bottom 60%",
    scrub: 2,
  },
});



// Heading Animation 
anime({
    targets: '.animation-site-header',
    keyframes: [
        {translateY: -100},
        {translateY: 0}
      ],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
  });


  // Hero Animation 
  anime.timeline()
  .add({
    targets: '.animation-hero-title',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1400,
  }).add({
    targets: '.animation-hero-subtitle',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1000,
}).add({
    targets: '.animation-hero-text',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1000,
}).add({
    targets: '.animation-hero-button',
    opacity: [0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1000,
  });
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    let panels = document.getElementsByClassName("panel");
    for (let j = 0; j < panels.length; j++) {
        if (i === j) continue;
        panels[j].style.maxHeight = null;
    }
  });
}


// Animation for first fold

const flightPathMeat = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -85, y: 180},
  ]
}

const flightPathFish = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -40, y: 50},
  ]
}

const flightPathCarrot1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -45, y: 60},
  ]
}

const flightPathTomato1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -100, y: 130},
  ]
}

const flightPathTomato2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -45, y: 120},
  ]
}

const flightPathMush1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -10, y: 175},
  ]
}

const flightPathMush2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 0, y: 175},
  ]
}

const flightPathMush3 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -45, y: 260},
  ]
}

const flightPathBottle1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -65, y: 250},
  ]
}

const flightPathBottle2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 25, y: 45},
  ]
}

const flightPathBro1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 45, y: 120},
  ]
}

const flightPathBro2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -10, y: 210},
  ]
}

const flightPathChilli1 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 30, y: 150},
  ]
}

const flightPathChilli2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 20, y: 185},
  ]
}

const timeline1 = new TimelineLite();

timeline1.to('#meat', 1, {
  bezier : flightPathMeat,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#fish', 1, {
  bezier : flightPathFish,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#carrot-1', 1, {
  bezier : flightPathCarrot1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#tomato-1', 1, {
  bezier : flightPathTomato1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#tomato-2', 1, {
  bezier : flightPathTomato2,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#mush-1', 1, {
  bezier : flightPathMush1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#mush-2', 1, {
  bezier : flightPathMush2,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#mush-3', 1, {
  bezier : flightPathMush3,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#bottle-1', 1, {
  bezier : flightPathBottle1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#bottle-2', 1, {
  bezier : flightPathBottle2,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#bro-1', 1, {
  bezier : flightPathBro1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#bro-2', 1, {
  bezier : flightPathBro2,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#chilli-1', 1, {
  bezier : flightPathChilli1,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')
.to('#chilli-2', 1, {
  bezier : flightPathChilli2,
  ease : Power1.easeInOut,
  opacity: 0
}, 'veg')


const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: '.meal-kit',
  duration: 1000,
  triggerHook: 0
})
  .setTween(timeline1)
  // .addIndicators()
  .setPin('.meal-kit')
  .addTo(controller1);


// Animation for second fold

const timeline2 = new TimelineLite();

timeline2.from('#filled-bag', 1, {
  top : -200,
  opacity: 0
})
.to('#filled-bag', 1, {
  top : 200,
  opacity: 1
})

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.delivery',
  duration: 1000,
  triggerHook: 0
})
  .setTween(timeline2)
  // .addIndicators()z
  .setPin('.delivery')
  .addTo(controller2);


// Animation for third fold

const timeline3 = new TimelineLite();

timeline3.to('#content-text1', 1, {
  top : -1,
  opacity: 0
})
.from('#content-text2', 1, {
  top : 100,
  opacity: 0
})
.to('#content-text2', 1, {
  top : 50,
  opacity: 1
}, 'last')
.from('#content-text3', 1, {
  top : 150,
  opacity: 0
}, 'last')
.to('#content-text3', 1, {
  top : 100,
  opacity: 1
}, 'last')
// .to("#horizontal", 1, {
//   backgroundImage : 'url(../img/anims/kitchen-2.png)',
//   backgroundSize : 'cover'
// }, 'last')

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.horizontal',
  duration: 1000,
  triggerHook: 0
})
  .setTween(timeline3)
  // .addIndicators()z
  .setPin('.horizontal')
  .addTo(controller3);
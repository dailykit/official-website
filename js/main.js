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

// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});

// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });

window.onload = () => {
  document.getElementById('explore-overlay').style.left = screen.width;

  document.getElementById('blob').addEventListener('click', function() {
    document.getElementById('explore-overlay').style.left = 0;
  });
};



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


const flightPathCarrot2 = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: 35, y: 220},
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

const flightPathLeaves = {
  curviness : 1.25,
  autoRotate : false,
  values : [
    {x: -25, y: 75},
  ]
}

const timeline1 = new TimelineLite();

timeline1.to('#meat', 1, {
  bezier : flightPathMeat,
  ease : Power1.easeInOut,
}, 'veg')
.to('#fish', 1, {
  bezier : flightPathFish,
  ease : Power1.easeInOut,
}, 'veg')
.to('#carrot-1', 1, {
  bezier : flightPathCarrot1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#carrot-2', 1, {
  bezier : flightPathCarrot2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#tomato-1', 1, {
  bezier : flightPathTomato1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#tomato-2', 1, {
  bezier : flightPathTomato2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#mush-1', 1, {
  bezier : flightPathMush1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#mush-2', 1, {
  bezier : flightPathMush2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#mush-3', 1, {
  bezier : flightPathMush3,
  ease : Power1.easeInOut,
}, 'veg')
.to('#bottle-1', 1, {
  bezier : flightPathBottle1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#bottle-2', 1, {
  bezier : flightPathBottle2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#bro-1', 1, {
  bezier : flightPathBro1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#bro-2', 1, {
  bezier : flightPathBro2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#chilli-1', 1, {
  bezier : flightPathChilli1,
  ease : Power1.easeInOut,
}, 'veg')
.to('#chilli-2', 1, {
  bezier : flightPathChilli2,
  ease : Power1.easeInOut,
}, 'veg')
.to('#leaves', 1, {
  bezier : flightPathLeaves,
  ease : Power1.easeInOut,
}, 'veg')
.to('#meat', 0, {
  opacity : 0
}, 'vanish')
.to('#fish', 0, {
  opacity : 0

}, 'vanish')
.to('#carrot-1', 0, {
  opacity : 0

}, 'vanish')
.to('#carrot-2', 0, {
  opacity : 0

}, 'vanish')
.to('#tomato-1', 0, {
  opacity : 0

}, 'vanish')
.to('#tomato-2', 0, {
  opacity : 0

}, 'vanish')
.to('#mush-1', 0, {
  opacity : 0

}, 'vanish')
.to('#mush-2', 0, {
  opacity : 0

}, 'vanish')
.to('#mush-3', 0, {
  opacity : 0

}, 'vanish')
.to('#bottle-1', 0, {
  opacity : 0

}, 'vanish')
.to('#bottle-2', 0, {
  opacity : 0

}, 'vanish')
.to('#bro-1', 0, {
  opacity : 0

}, 'vanish')
.to('#bro-2', 0, {
  opacity : 0

}, 'vanish')
.to('#chilli-1', 0, {
  opacity : 0

}, 'vanish')
.to('#chilli-2', 0, {
  opacity : 0

}, 'vanish')
.to('#leaves', 0, {
  opacity : 0
  
}, 'vanish')
.to('#bag', 2, {
  top : 700,
})
.to('#bag', 0, {
  opacity: 0
})


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

// Code for what you're going to ask

timeline2.from('#filled-bag', 1, {
  top : -200,
  opacity: 0
})
.to('#filled-bag', 1, {
  top : 95,
  opacity: 1
})
.to('#filled-bag', 0.3, {
  top : 250,
  left : 600,
  opacity : 0
}, 'last')
.from('#scooter', 0, {
  top : 0,
  left : 250,
})
.to('#scooter', 0.7, {
  top : 300,
  left : 800,
  opacity : 0
}, 'last');

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

timeline3
.from('#filled-bag-slide', 1, {
  right : -200
})
.to('#filled-bag-slide', 3, {
  right : 424,
},)
.from('#content-text1', 1, {
  top: 100,
  opacity: 0
})
.to('#content-text1', 1, {
  opacity: 1
})
.to('#horizontal', 0, {
  backgroundImage : 'url(img/anims/kitchen-2.png)'
}, 'gayab')
.to('#filled-bag-slide', 0, {
  opacity: 0
}, 'gayab')
.to('#content-text1', 1, {
  top : -100,
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


// Animation for fifth fold

const timeline4 = new TimelineLite();

timeline4
.to('.card-1', 0.2, {
  top : 20,
  opacity: 0
})
.from('.card-2', 0.2, {
  top : 40,
  opacity: 0
})
.to('.card-2', 0.2, {
  top : 20,
  opacity: 1
})
.to('.card-2', 0.2, {
  top : 20,
  opacity: 0
})
.from('.card-3', 0.2, {
  top : 40,
  opacity: 0
})
.to('.card-3', 0.2, {
  top : 20,
  opacity: 1
})
.to('.card-3', 0.2, {
  top : 20,
  opacity: 0
})
.from('.card-4', 0.2, {
  top : 40,
  opacity: 0
})
.to('.card-4', 0.2, {
  top : 20,
  opacity: 1
})


const controller4 = new ScrollMagic.Controller();

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.more',
  duration: 500,
  triggerHook: 0
})
  .setTween(timeline4)
  // .addIndicators()z
  .setPin('.more')
  .addTo(controller4);


// Animation for sixth fold

const timeline5 = new TimelineLite();

timeline5
.from('.side-screen', 1, {
  left : screen.width,
})
.to('.side-screen', 1, {
  left : 0
})
.to('.main', 1, {
  top : 200
})
.from('.helper', 1 , {
  opacity : 0
})
.to('.helper', 0.5, {
  opacity  : 1
})
.to('.cost', 0, {
  background : '#fff'
})

const controller5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
  triggerElement: '.cost',
  duration: 500,
  triggerHook: 0
})
  .setTween(timeline5)
  // .addIndicators()z
  .setPin('.cost')
  .addTo(controller5);


  // Animation for seventh fold

const timeline6 = new TimelineLite();

timeline6
.to('.form-text', 1, {
  top : '30%',
}, 'label')
.to('.form-helper', 1, {
  opacity : 1
}, 'label')
.to('.kit-form', 0.2, {
  opacity : 1
})

const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
  triggerElement: '.form',
  duration: 500,
  triggerHook: 0
})
  .setTween(timeline6)
  // .addIndicators()z
  .setPin('.form')
  .addTo(controller6);
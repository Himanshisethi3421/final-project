
function pg1timeline(){

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#videos",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=350", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers:true
    }
  });
  tl.addLabel("abcd")
  .to('.cv',{
     width:"100%",  
     ease: Expo.easeInOut,
     duration:2
  },"abcd")

  .to('#smv1',{
      x:'-130%',
      duration:4,
      opacity:0
  },"abcd") 

  .to('#smv2',{
    x:'130%',
    duration:4,
    opacity:0
  },"abcd")

  .to('#mv1',{ 
    x:'-130%',
    duration:3,
    opacity:0
  },"abcd")

 .to('#mv2',{
    x:'130%',
    duration:3,
    opacity:0
},"abcd")
}

function headtext(){
  $('#head1').textillate({
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    autoStart: true,
    inEffects: [],
    outEffects: ['hinge'],
    in: {
      effect: 'fadeInUp',
      delayScale: 1,
      delay: 30,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    callback: function () {},
    type: 'char'
  });
  
} 

function pg2Heading(){
  
  var tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {

      trigger: "#nxtpg",
        // pin the trigger element while active
      start: "top 50%", // when the top of the trigger hits the top of the viewport
      // end: "+=400",  // end after scrolling 500px beyond the start
       // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers:true
    }

  });
  tl2.to("#nxtpg .a", {
    opacity:1,
    onStart: function(){
      $('.a').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: ['hinge'],
        
        in: {
          effect: 'fadeInUp',
          delayScale: 1,
          delay: 40,
          sync: false,
          shuffle: false,
          reverse: false,
        },
        callback: function () {},
        type: 'char'
      })
    }
    
  })

  .to("#line",{
    width:'100%',
    opacity:1,
    duration:2,
    ease:Expo.easeInOut
    },"a")
    
}

function pg2txt(){
  
  var tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {

      trigger: "#line",
        // pin the trigger element while active
      start: "top 50%", // when the top of the trigger hits the top of the viewport
      // end: "+=400",  // end after scrolling 500px beyond the start
       // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers:true
    }

  });
  tl2.addLabel("imgeli")
  .to("#lft2 .aa", {
    opacity:1,
    stagger:1,
    onStart: function(){
      $('.aa').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: ['hinge'],
        
        in: {
          effect: 'fadeInUp',
          delayScale: 1,
          delay: 10,
          sync: false,
          shuffle: false,
          reverse: false,
        },
        callback: function () {},
        type: 'char'
      })
    }
    
  })
       .to("#elipse",{
         opacity:1,
           scale:1,
           duration:3,
           ease:Expo.easeInOutease
       },"imgeli")
       .to("#elipse img",{
        scale:1,
        duration:3,
           ease:Expo.easeInOutease
    },"imgeli")
  
    
}
function pg3img(){
  
  var tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {

      trigger: "#thirdpg",
        // pin the trigger element while active
      start: "15% 50%", // when the top of the trigger hits the top of the viewport
      // end: "+=400",  // end after scrolling 500px beyond the start
       // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers:true
    }

  });
  tl2.addLabel("imgeli")
  
      .to("#img3",{
        opacity:1,
           scale:1,
           duration:2,
           ease:Expo.easeInOutease
       },"imgeli")
       .to("#img3 img",{
        scale:1,
        duration:2,
        ease:Expo.easeInOutease
    },"imgeli")
      .from("#right3",{
        opacity:0,
        y:30,
        duration:2,
        ease:Expo.easeInOutease
      },"imgeli")
    
  
    
}

pg1timeline();
headtext();
pg2Heading();
pg2txt();
pg3img();

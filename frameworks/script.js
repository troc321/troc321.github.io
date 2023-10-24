/*const bouncyCircle = new mojs.Shape({
  parent:       '#leaf',
  shape:        'circle',
  width: 500,
  height: 500,
  fill:         {'#F64040': '#FC46AD'},
  radius:       {20: 80},
  duration:     2000,
  isYoyo:       true,
  isShowStart:  true,
  easing:       'elastic.inout',
  repeat:       999.,
});

bouncyCircle.play()*/

class Lily1 extends mojs.CustomShape {
    getShape () { return '<path d="M47.54541,26.45785s-16.33536-1.92181-21.13988,10.56994-.9609,16.81582,1.44136,22.10079,29.30756,14.89401,35.07299-5.76542-5.28497-23.54214-5.28497-23.54214l-10.56994,9.12859,.48045-12.49175Z"/>'; }
}
mojs.addShape( 'lily1', Lily1 );

class Lily2 extends mojs.CustomShape {
  getShape () { return '<path d="M75.55151,43.00006c-.41345-5.78796-8.68195-29.35327-28.93982-31.8338C26.35376,8.68567,10.64355,19.02136,8.98987,47.13434c-.84833,14.42151,8.74762,22.53052,18.29553,27.01074l6.7851-9.80072v12.45807c2.44623,.7901,4.69171,1.35333,6.53003,1.74945,2.87402,.82526,16.84814,4.15051,24.61536-6.612,5.37451-3.72083,10.74902-23.15186,10.33563-28.93982Z"/>'; }
}
mojs.addShape( 'lily2', Lily2 );

class Lily3 extends mojs.CustomShape {
  getShape () { return '<path d="M43.9231,23.84271s-2.93292-.19507-6.17487-.31l.01282-.08203s-1.40173-.14124-3.37335,.00336c-.22327-.00189-.44598-.00354-.66229-.00354l-.00122,.06226c-1.50031,.15277-3.24695,.47595-4.94202,1.13513l4.55115,18.40692-.00012,.00671-9.02112-17.25769s-18.8266,12.9433-11.7666,31.76984c7.06,18.8266,26.67102,21.96436,39.22205,15.68884,12.55109-6.27551,29.41656-38.04541-7.84442-49.4198Z"/>'; }
}
mojs.addShape( 'lily3', Lily3 );

class Lily4 extends mojs.CustomShape {
  getShape () { return '<path d="M15.35805,65.63314S5.71325,32.7078,39.96891,25.39106s37.58144,21.28507,37.58144,26.27375-7.31674,39.9095-37.58144,28.93439l1.99547-17.95927-12.63801,13.30317s-7.64932,0-13.96832-10.30995Z"/>'; }
}
mojs.addShape( 'lily4', Lily4 );

var fish1info = new mojs.Shape({
  shape:        'rect',
  radius:       {0: 65},
  x: -400,
  y: 0,
  fill:         'red',
})
  
const lily1 = new mojs.Shape({
    shape:    'lily1', 
    fill:     '#8eab62',
    easing:       'back.inout',
    x: {[-200]: -170},
    y: {[-200]: -170},
    duration:     7000,
    isYoyo: true,
    repeat: 999,
}).play();

const lily2 = new mojs.Shape({
  shape:    'lily2', 
  fill:     '#9dbb67',
  easing:       'back.inout',
  x: {650: 610},
  duration:     9000,
  isYoyo: true,
  repeat: 999,
}).play();

const lily3 = new mojs.Shape({
  shape:    'lily3',
  fill:     '#8eba5e',
  easing:       'back.inout',
  y: {100: 90},
  x: {100: 90},
  duration:     5000,
  isYoyo: true,
  repeat: 999,
}).play();

const lily4 = new mojs.Shape({
  shape:    'lily4',
  fill:     '#b1c366',
  y: {[-50]: -30},
  x: {10: 0},
  easing:       'back.inout',
  duration:     2000,
  isYoyo: true,
  repeat: 999,
}).play();

const splash = new mojs.Burst({
    left: 0, top: 0,
    radius:   { 0: 50 },
    angle:    'rand(0, 360)',
    count:    8,
    children: {
      shape:        'line',
      stroke:       'white',
      fill:         'white',
      scale:        'rand(.5,.75)',
      scaleX:       { 1: 0 },
      easing:       'circ.out',
      duration:     500
    }
  });
  
  const bubbles = new mojs.Burst({
    left: 0, top: 0,
    radius:   50,
    count:    8,
    timeline: { delay: 100 },
    children: {
      stroke:       'white',
      fill:         'none',
      scale:        'rand(.1,2)',
      strokeWidth:  { 8: 0 },
      radius:       { 0 : 'rand(6, 10)' },
      degreeShift:  'rand(-50, 50)',
      duration:     750,
      easing:       'circ.out',
      delay:        'rand(0, 250)',
    }
  });

  const moveSplash = new mojs.Burst({
    left: 0, top: 0,
    radius:   20,
    count:    6,
    delay: 200 ,
    children: {
      stroke:       'white',
      fill:         'none',
      scale:        'rand(.1,.75)',
      strokeWidth:  { 8: 0 },
      radius:       { 0 : 'rand(6, 10)' },
      degreeShift:  'rand(-50, 50)',
      duration:     700,
      easing:       'circ.out',
    },
  });

  const fish1s = document.querySelector("#Fish1s");
  const fish1text = document.querySelector('#fish1text');
  const fish1c = document.querySelector(".Fish1c");
  /*const q = document.querySelector(".q");*/

  document.addEventListener( 'mousemove', function (e) {
    moveSplash
      .tune({ x: e.pageX, y: e.pageY })
      .generate()
      .replay();
  });
  
  document.addEventListener( 'click', function (e) {
    splash
      .tune({ x: e.pageX, y: e.pageY })
      .generate()
      .replay();
    
    bubbles
      .tune({ x: e.pageX, y: e.pageY })
      .generate()
      .replay();
  });

  fish1s.addEventListener( 'click', () => {
    fish1info.play();
    fish1text.removeAttribute("hidden");
    fish1c.classList.add("appear");
  });

  fish1c.addEventListener('click', () => {
    fish1info.playBackward();
    fish1text.setAttribute("hidden", true);
    fish1c.classList.remove("appear");
  });

  /*q.addEventListener( 'click', () => {
    rect.playBackward();
  });*/
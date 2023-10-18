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

class Leaf extends mojs.CustomShape {
    getShape () { return '<path d="M12.06134,76.12853s-1.58818-13.42736,12.99422-33.20745c0,0,2.45446-2.8876,2.45446-6.49711s-.43314-7.65215-.43314-7.65215c0,0,1.4438-7.79653,4.18703-10.53976s12.70546-7.50777,12.70546-7.50777c0,0,16.17059-4.04265,31.47489,6.64149l-6.78587,11.55042-2.31008,5.77521s-6.78587,13.28298-21.9458,12.56108c-15.15992-.7219-14.43802-4.76455-14.43802-4.76455,0,0-18.04753,14.36583-17.47001,54.72011l-.43314-21.07951Z"/>'; }
}
mojs.addShape( 'leaf', Leaf );
  
const leaf = new mojs.Shape({
    parent:   '#leaf',
    shape:    'leaf', 
    fill:     '#b1c236',
    easing:       'back.inout',
    x: {50: 150},
    y: {50: 150},
    duration:     7000,
    isYoyo: true,
    repeat: 999,
});

leaf.play()

const burst = new mojs.Burst({
    left: 0, top: 0,
    radius:   { 0: 30 },
    angle:    'rand(0, 360)',
    children: {
      shape:        'line',
      stroke:       'white',
      fill:         'none',
      scale:        'rand(.1,1)',
      scaleX:       { 1: 0 },
      easing:       'cubic.out',
      duration:     1000
    }
  });
  
  const bubbles = new mojs.Burst({
    left: 0, top: 0,
    radius:   28,
    count:    8,
    timeline: { delay: 100 },
    children: {
      stroke:       'white',
      fill:         'none',
      scale:        'rand(.1,1)',
      strokeWidth:  { 8: 0 },
      radius:       { 0 : 'rand(6, 10)' },
      degreeShift:  'rand(-50, 50)',
      duration:     400,
      delay:        'rand(0, 250)',
    }
  });
  
  document.addEventListener( 'click', function (e) {
    burst
      .tune({ x: e.pageX, y: e.pageY })
      .generate()
      .replay();
    
    bubbles
      .tune({ x: e.pageX, y: e.pageY })
      .generate()
      .replay();
  });
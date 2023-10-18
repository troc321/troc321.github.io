const bouncyCircle = new mojs.Shape({
    parent:       '#bouncyCircle',
    shape:        'circle',
    fill:         {'#F64040': '#FC46AD'},
    radius:       {20: 80},
    duration:     2000,
    isYoyo:       true,
    isShowStart:  true,
    rx: 100,
    ry: 100,
    easing:       'elastic.inout',
    repeat:       100,
  });
  
  bouncyCircle.play()
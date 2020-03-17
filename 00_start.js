var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 260, 38).toDefs();
var character = Paper.image('img/character.png', 0, 0, 210, 190).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

bi.use().transform('t50, 40').appendTo(topArea);

topArea.text(180, 135, '병음 익히기').attr({
  'font-size': 33,
  'text-anchor': 'middle'
});

character.use().transform('t70, 210 r-20').appendTo(topArea);

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#C7EAE7'
});
var t1 = topArea.text(180, 512, '들 어 가 기').attr({
  'font-size': 17,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('01_menu.html');
}

var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 26).toDefs();
var next = Paper.image('img/next.png', 0, 0, 33, 27).toDefs();
var u_xin = Paper.image('img/u_xin.png', 0, 0, 130, 130).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

var topBox = Paper.g();

topBox.path('M1 45 L359 45 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#FFE0D5'
});

home.use().transform('t16, 10').click(handlerHome).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('02_menu.html');
}

next.use().transform('t315, 10').click(handlerNext).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('u_17_iang.html');
}

// 상단
var topArea = Paper.g();

var bottomArea = Paper.g();

bottomArea.rect(35, 100, 140, 95, 10).click(playAud01).attr({
  'fill': '#F3F9F3',
  'stroke': '#D5EDD2',
  'stroke-width': 3,
  'cursor': 'pointer'
});

bottomArea.text(74, 177, 'in').click(playAud01).attr({
  'font-size': 85,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_u_in.wav');
  audio1.play();
}

u_xin.use().transform('t110, 260').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var tt = bottomArea.text(180, 480, ['xìn', '편지']).click(playAud02).attr({
  'font-size': 70,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});
tt.selectAll('tspan')[1].attr({
  x: 180,
  y: 560,
  'font-size': 40
});

function playAud02() {
  var audio2 = new Audio('aud/aud_u_xin.wav');
  audio2.play();
}

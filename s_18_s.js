var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 26).toDefs();
var next = Paper.image('img/next.png', 0, 0, 33, 27).toDefs();
var s_san = Paper.image('img/s_san.png', 0, 0, 110, 110).toDefs();

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
  location.replace('01_menu.html');
}

next.use().transform('t315, 10').click(handlerNext).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('s_19_zh.html');
}

// 상단
var topArea = Paper.g();

var bottomArea = Paper.g();

bottomArea.circle(90, 150, 60).click(playAud01).attr({
  'fill': '#F6F6F6',
  'stroke': '#C7EAE7',
  'stroke-width': 3,
  'cursor': 'pointer'
});

bottomArea.text(72, 180, 's').click(playAud01).attr({
  'font-size': 100,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_s_s.wav');
  audio1.play();
}

s_san.use().transform('t135, 260').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var tt = bottomArea.text(180, 480, ['sǎn', '우산']).click(playAud02).attr({
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
  var audio2 = new Audio('aud/aud_s_san.wav');
  audio2.play();
}

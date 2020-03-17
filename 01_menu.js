var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var face = Paper.image('img/face.png', 0, 0, 60, 50).toDefs();
var playicon01 = Paper.image('img/playicon01.png', 0, 0, 30, 30).toDefs();
var playicon02 = Paper.image('img/playicon02.png', 0, 0, 30, 30).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

face.use().transform('t25, 15').appendTo(topArea);

topArea.text(95, 55, '병음 익히기').attr({
  'font-size': 25,
  'cursor': 'pointer'
});

// 하단
var bottomArea = Paper.g();

bottomArea.path('M50,85 L125,85 A18,18 0 0,1 145,105 L145,125 L30,125 L30,105 A18,18 0 0,1 50,85').attr({
  'fill': '#c3d8d8'
});

bottomArea.text(68, 113, '성 모').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

bottomArea.path('M170,85 L245,85 A18,18 0 0,1 265,105 L265,125 L150,125 L150,105 A18,18 0 0,1 170,85').click(handlerU).attr({
  'fill': '#ffe2c5',
  'cursor': 'pointer'
});

bottomArea.text(188, 113, '운 모').click(handlerU).attr({
  'font-size': 20,
  'fill': '#c0c0c0',
  'cursor': 'pointer'
});

function handlerU() {
  location.replace('02_menu.html');
}

bottomArea.line(30, 125, 330, 125).attr({
  'stroke': 'gray'
});

// 표
bottomArea.rect(30, 140, 300, 460, 10, 10).attr({
  'fill': 'none',
  'stroke': 'gray'
});

bottomArea.line(90, 148, 90, 592).attr({
  'stroke': 'orange'
});

for (var k = 0; k < 3; k++) {
  bottomArea.line(150 + (k * 60), 148, 150 + (k * 60), 592).attr({
    'stroke': 'gray',
    'stroke-dasharray': '2, 2'
  });
}

for (var i = 0; i < 5; i++) {
  bottomArea.line(37, 220 + (i * 75), 323, 220 + (i * 75)).attr({
    'stroke': 'gray',
    'stroke-width': 0.7
  });
}

// 아이콘
playicon01.use().transform('t48, 168').click(handler01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon02.use().transform('t48, 243').click(handler05).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon01.use().transform('t48, 318').click(handler09).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon02.use().transform('t48, 393').click(handler12).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon01.use().transform('t48, 468').click(handler15).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon02.use().transform('t48, 543').click(handler18).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});


// 텍스트
bottomArea.text(110, 198, 'b').click(handler01).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler01() {
  location.replace('s_02_b.html');
}

bottomArea.text(170, 193, 'p').click(handler02).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler02() {
  location.replace('s_03_p.html');
}

bottomArea.text(225, 193, 'm').click(handler03).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler03() {
  location.replace('s_04_m.html');
}

bottomArea.text(292, 198, 'f').click(handler04).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler04() {
  location.replace('s_05_f.html');
}

bottomArea.text(110, 275, 'd').click(handler05).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler05() {
  location.replace('s_06_d.html');
}

bottomArea.text(172, 275, 't').click(handler06).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler06() {
  location.replace('s_07_t.html');
}

bottomArea.text(229, 273, 'n').click(handler07).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler07() {
  location.replace('s_08_n.html');
}

bottomArea.text(293, 276, 'l').click(handler08).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler08() {
  location.replace('s_09_l.html');
}

bottomArea.text(110, 345, 'g').click(handler09).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler09() {
  location.replace('s_10_g.html');
}

bottomArea.text(170, 349, 'k').click(handler10).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler10() {
  location.replace('s_11_k.html');
}

bottomArea.text(229, 348, 'h').click(handler11).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler11() {
  location.replace('s_12_h.html');
}

bottomArea.text(117, 421, 'j').click(handler12).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler12() {
  location.replace('s_13_j.html');
}

bottomArea.text(170, 419, 'q').click(handler13).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler13() {
  location.replace('s_14_q.html');
}

bottomArea.text(231, 420, 'x').click(handler14).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler14() {
  location.replace('s_15_x.html');
}

bottomArea.text(112, 495, 'z').click(handler15).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler15() {
  location.replace('s_16_z.html');
}

bottomArea.text(170, 495, 'c').click(handler16).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler16() {
  location.replace('s_17_c.html');
}

bottomArea.text(231, 495, 's').click(handler17).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler17() {
  location.replace('s_18_s.html');
}

bottomArea.text(101, 570, 'zh').click(handler18).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler18() {
  location.replace('s_19_zh.html');
}

bottomArea.text(161, 570, 'ch').click(handler19).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler19() {
  location.replace('s_20_ch.html');
}

bottomArea.text(222, 570, 'sh').click(handler20).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler20() {
  location.replace('s_21_sh.html');
}

bottomArea.text(292, 570, 'r').click(handler21).attr({
  'font-size': 40,
  'cursor': 'pointer'
});

function handler21() {
  location.replace('s_22_r.html');
}

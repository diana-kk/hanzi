var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var face = Paper.image('img/face.png', 0, 0, 60, 50).toDefs();
var playicon03 = Paper.image('img/playicon03.png', 0, 0, 27, 27).toDefs();
var playicon04 = Paper.image('img/playicon04.png', 0, 0, 27, 27).toDefs();

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

bottomArea.path('M50,85 L125,85 A18,18 0 0,1 145,105 L145,125 L30,125 L30,105 A18,18 0 0,1 50,85').click(handlerS).attr({
  'fill': '#c3d8d8',
  'cursor': 'pointer'
});

bottomArea.text(68, 113, '성 모').click(handlerS).attr({
  'font-size': 20,
  'fill': '#a0a0a0',
  'cursor': 'pointer'
});

function handlerS() {
  location.replace('01_menu.html');
}

bottomArea.path('M170,85 L245,85 A18,18 0 0,1 265,105 L265,125 L150,125 L150,105 A18,18 0 0,1 170,85').attr({
  'fill': '#ffe2c5'
});

bottomArea.text(188, 113, '운 모').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

bottomArea.line(30, 125, 334, 125).attr({
  'stroke': 'gray'
});

// 표
bottomArea.rect(30, 140, 304, 460, 10, 10).attr({
  'fill': 'none',
  'stroke': 'gray'
});

bottomArea.line(75, 148, 75, 592).attr({
  'stroke': 'orange'
});

for (var k = 0; k < 4; k++) {
  bottomArea.line(125 + (k * 52), 148, 125 + (k * 52), 592).attr({
    'stroke': 'gray',
    'stroke-dasharray': '2, 2'
  });
}

for (var i = 0; i < 6; i++) {
  bottomArea.line(37, 205.7 + (i * 66), 327, 205.7 + (i * 66)).attr({
    'stroke': 'gray',
    'stroke-width': 0.7
  });
}

// 아이콘
playicon03.use().transform('t40, 163').click(handler01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon04.use().transform('t40, 225').click(handler05).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon03.use().transform('t40, 291').click(handler10).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon04.use().transform('t40, 357').click(handler14).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon03.use().transform('t40, 423').click(handler19).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon04.use().transform('t40, 489').click(handler23).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
playicon03.use().transform('t40, 554').click(handler26).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});


// 텍스트
bottomArea.text(90, 186, 'ai').click(handler01).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler01() {
  location.replace('u_02_ai.html');
}

bottomArea.text(140, 186, 'ei').click(handler02).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler02() {
  location.replace('u_03_ei.html');
}

bottomArea.text(189, 186, 'ao').click(handler03).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler03() {
  location.replace('u_04_ao.html');
}

bottomArea.text(239, 186, 'ou').click(handler04).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler04() {
  location.replace('u_05_ou.html');
}

bottomArea.text(85, 248, 'an').click(handler05).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler05() {
  location.replace('u_06_an.html');
}

bottomArea.text(135, 248, 'en').click(handler06).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler06() {
  location.replace('u_07_en.html');
}

bottomArea.text(182.5, 247, 'ang').click(handler07).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler07() {
  location.replace('u_08_ang.html');
}

bottomArea.text(233.5, 247, 'eng').click(handler08).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler08() {
  location.replace('u_09_eng.html');
}

bottomArea.text(285, 247, 'ong').click(handler09).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler09() {
  location.replace('u_10_ong.html');
}

bottomArea.text(90, 314, 'ia').click(handler10).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler10() {
  location.replace('u_11_ia.html');
}

bottomArea.text(140, 314, 'ie').click(handler11).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler11() {
  location.replace('u_12_ie.html');
}

bottomArea.text(186, 313, 'iao').click(handler12).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler12() {
  location.replace('u_13_iao.html');
}

bottomArea.text(234.5, 311.5, 'i(o)u').click(handler13).attr({
  'font-size': 21,
  'cursor': 'pointer'
});

function handler13() {
  location.replace('u_14_iou.html');
}

bottomArea.text(84, 379, 'ian').click(handler14).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler14() {
  location.replace('u_15_ian.html');
}

bottomArea.text(140, 380, 'in').click(handler15).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler15() {
  location.replace('u_16_in.html');
}

bottomArea.text(182.5, 377, 'iang').click(handler16).attr({
  'font-size': 23,
  'cursor': 'pointer'
});

function handler16() {
  location.replace('u_17_iang.html');
}

bottomArea.text(233.5, 377, 'iong').click(handler17).attr({
  'font-size': 23,
  'cursor': 'pointer'
});

function handler17() {
  location.replace('u_18_iong.html');
}

bottomArea.text(288, 379, 'ing').click(handler18).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler18() {
  location.replace('u_19_ing.html');
}

bottomArea.text(85, 445, 'ua').click(handler19).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler19() {
  location.replace('u_20_ua.html');
}

bottomArea.text(135, 445, 'uo').click(handler20).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler20() {
  location.replace('u_21_uo.html');
}

bottomArea.text(186, 444, 'uai').click(handler21).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler21() {
  location.replace('u_22_uai.html');
}

bottomArea.text(234, 442, 'u(e)i').click(handler22).attr({
  'font-size': 21,
  'cursor': 'pointer'
});

function handler22() {
  location.replace('u_23_uei.html');
}

bottomArea.text(80, 510, 'uan').click(handler23).attr({
  'font-size': 26,
  'cursor': 'pointer'
});

function handler23() {
  location.replace('u_24_uan.html');
}

bottomArea.text(129, 508, 'u(e)n').click(handler24).attr({
  'font-size': 20,
  'cursor': 'pointer'
});

function handler24() {
  location.replace('u_25_uen.html');
}

bottomArea.text(181.5, 508, 'uang').click(handler25).attr({
  'font-size': 21,
  'cursor': 'pointer'
});

function handler25() {
  location.replace('u_26_uang.html');
}

bottomArea.text(84, 575, 'üe').click(handler26).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler26() {
  location.replace('u_27_uve.html');
}

bottomArea.text(130, 574, 'üan').click(handler27).attr({
  'font-size': 27,
  'cursor': 'pointer'
});

function handler27() {
  location.replace('u_28_uvan.html');
}

bottomArea.text(185, 575, 'ün').click(handler28).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler28() {
  location.replace('u_29_uvn.html');
}

bottomArea.text(242, 575, 'er').click(handler29).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler29() {
  location.replace('u_30_er.html');
}

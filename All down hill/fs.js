//all pre chat gpt back in 2019 or somthing, i was in highschool with no proper varible naming techniqes
// I swear I code much better now this is soooo ugly but hey i was 16 with a chromebook
// back then I didnt know what functions were and I statred in javascript lol
var dddd = start;
if (window.localStorage.getItem("btype") == null) {
  localStorage.setItem("btype", 0);
}

if (window.localStorage.getItem("bimgt") == null) {
  localStorage.setItem("bimgt", 0);
}

if (window.localStorage.getItem("imgbloc") == null) {
  localStorage.setItem("imgbloc", 0);
}
if (window.localStorage.getItem("wipe") == null) {
  window.localStorage.clear();
  window.localStorage.setItem("wipe", 1);
}

var c = document.getElementById("c");
var d = c.getContext("2d");
var coin = 0;
var ads = 1;
var thek = 1;
var thekc = 1;
var fx = 0;
var asas = JSON.parse(window.localStorage.getItem("cdc"));
var sx = 40;
var sx1 = 40;
var sx2 = 40;
var blue = window.localStorage.getItem("bluec");
var yellow = window.localStorage.getItem("yellowc");
var ffff = 0;
var skey = 0;
var akey = 0;
var totr = 0;
var count = 1;
var rainb = 0;
var img = document.getElementById("tree");
var imgl = document.getElementById("log");
var l = 2;
var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var x4 = 0;
var y4 = 0;
var x5 = 0;
var y5 = 0;
var x6 = 0;
var y6 = 0;
var x7 = 0;
var y7 = 0;
var vx = 0;
var vy = 0;
var vx1 = 0;
var vy1 = 0;
var vx2 = 0;
var vy2 = 0;
var vx3 = 0;
var vy3 = 0;
var vx4 = 0;
var vy4 = 0;
var vx5 = 0;
var vy5 = 0;
var vx6 = 0;
var vy6 = 0;
var vx7 = 0;
var vy7 = 0;
var dl1 = 0;
var dl2 = 0;
var dl3 = 0;
var dl4 = 0;
var dl5 = 0;
var dl1y = 0;
var dl2y = 0;
var dl3y = 0;
var dl4y = 0;
var dl5y = 0;
var ts = 0;
var j = 3;
var st = 0;
var uhn = "UNLOCK ???";
var ssad = 0;
var d1 = 11110;
var d2 = 11110;
var d3 = 11110;
var tc = "black";
var ap = 0;
var br = 85;
var brr = 70;
var max = 100;
var mini = 350;
var jesussomanyvaribles = 0;
var jesussomanyvaribles2 = 0;
var imgblockc = window.localStorage.getItem("imgbloc");
var theblock = window.localStorage.getItem("btype");
var timgc = window.localStorage.getItem("bimgt");
setInterval(setTime, 1000);

var coinimg = document.getElementById("firstimg");
var treeimg = document.getElementById("secondimg");
var logimg = document.getElementById("secondimg");

function setTime() {
  ++ts;
}

function tree() {
  x = Math.floor(Math.random() * (500 - -50));
  y = Math.floor(Math.random() * 400) + max;

  x1 = Math.floor(Math.random() * (-50 - 10));
  y1 = Math.floor(Math.random() * mini) + max;

  x2 = Math.floor(Math.random() * (500 - -80));
  y2 = Math.floor(Math.random() * mini) + max;

  x3 = Math.floor(Math.random() * (500 - -90));
  y3 = Math.floor(Math.random() * mini) + max;

  x4 = Math.floor(Math.random() * (500 - -50));
  y4 = Math.floor(Math.random() * mini) + max;

  x5 = Math.floor(Math.random() * (500 - -50));
  y5 = Math.floor(Math.random() * mini) + max;

  x6 = Math.floor(Math.random() * (500 - -50));
  y6 = Math.floor(Math.random() * mini) + max;

  x7 = Math.floor(Math.random() * (500 - +60));
  y7 = Math.floor(Math.random() * mini) + max;

  vx = Math.floor(Math.random() * (500 - -20));
  vy = Math.floor(Math.random() * mini) + max;

  vx1 = Math.floor(Math.random() * (500 - -50));
  vy1 = Math.floor(Math.random() * mini) + max;

  vx2 = Math.floor(Math.random() * (500 - -50));
  vy2 = Math.floor(Math.random() * mini) + max;

  vx3 = Math.floor(Math.random() * (500 - -10));
  vy3 = Math.floor(Math.random() * mini) + max;

  vx4 = Math.floor(Math.random() * (500 - -10));
  vy4 = Math.floor(Math.random() * mini) + max;

  vx5 = Math.floor(Math.random() * (500 - -10));
  vy5 = Math.floor(Math.random() * mini) + max;

  vx6 = Math.floor(Math.random() * (500 - -10));
  vy6 = Math.floor(Math.random() * mini) + max;

  vx7 = Math.floor(Math.random() * (500 - -10));
  vy7 = Math.floor(Math.random() * mini) + max;
}

tree();

function ggg() {
  d.drawImage(img, x, y, 45, 60);
  d.drawImage(img, x1, y1, 45, 60);

  d.drawImage(img, x2, y2, 45, 60);
  d.drawImage(img, x3, y3, 45, 60);
  d.drawImage(img, x4, y4, 45, 60);
  d.drawImage(img, x5, y5, 45, 60);
  d.drawImage(img, x6, y6, 45, 60);
  d.drawImage(img, x7, y7, 45, 60);
  d.drawImage(img, vx, vy, 45, 60);
  d.drawImage(img, vx1, vy1, 45, 60);
  d.drawImage(img, vx2, vy2, 45, 60);
  d.drawImage(img, vx3, vy3, 45, 60);
  d.drawImage(img, vx4, vy4, 45, 60);
  d.drawImage(img, vx5, vy5, 45, 60);
  d.drawImage(img, vx6, vy6, 45, 60);
  d.drawImage(img, vx7, vy7, 45, 60);
}

window.addEventListener("keydown", this.check, false);
let xx = 250;
let yy = 20;

function draw() {
  d.clearRect(0, 0, c.width, c.height);
  ggg();
  d.fillStyle = tc;
  if (theblock == 0) {
    d.fillRect(xx, yy, 10, 10);
  }

  if (theblock == 1 && imgblockc == 0) {
    d.drawImage(logimg, xx, yy, 15, 15);
  }
  if (theblock == 1 && imgblockc == 1) {
    d.drawImage(coinimg, xx, yy, 15, 15);
  }

  if (theblock == 1 && imgblockc == 2) {
    d.drawImage(treeimg, xx, yy, 15, 15);
  }

  d.font = "20px VT323";
  d.fillText(" STAGE:" + st, 1, 20);

  d.fillText(
    " HIGHEST STAGE:" + window.localStorage.getItem("highscore"),
    1,
    40
  );
  d.fillText(" TOKENS:" + asas, 1, 60);

  d.font = "150px VT323";
  d.fillStyle = "red";
  d.fillText(" DEAD", d1, 250);
  d.font = "30px VT323";
  d.fillText(" HOME (H)", d2, 300);
}

function gameLoop(timeStamp) {
  update();
  draw();
  window.requestAnimationFrame(gameLoop);
}

function ach() {
  function achf() {
    d.clearRect(0, 0, c.width, c.height);
    d.font = "50px VT323";
    d.fillStyle = "red";
    d.fillText("ACHIEVEMENTS", 130, 50);
    d.font = "20px VT323";
    d.fillText("STATS (S)", 220, 70);
    d.font = "25px VT323";
    d.fillStyle = "green";
    d.fillText("TOP 1%", 224, 130);

    d.font = "15px VT323";

    d.fillText("GAIN A TOTAL OF 1,000,000 TOKENS", 155, 152);
    d.fillText(window.localStorage.getItem("totalc") + "/1,000,000", 220, 174);

    if (window.localStorage.getItem("totalc") >= 1000000) {
      d.fillText("COIN SKIN (1)", 219, 198);
      jesussomanyvaribles == 1;
    } else {
      d.fillText("UNLOCK ???", 225, 198);
    }

    d.font = "25px VT323";
    d.fillStyle = "blue";
    d.fillText("ONE WITH THE TREES", 160, 240);

    d.font = "15px VT323";

    d.fillText("PASS 80,000 OBSTACLES ", 190, 262);
    d.fillText(window.localStorage.getItem("totalr") * 8 + "/80,000", 220, 284);

    if (window.localStorage.getItem("totalr") * 8 >= 80000) {
      d.fillText("TREE SKIN (2)", 219, 308);
      jesussomanyvaribles2 == 1;
    } else {
      d.fillText("UNLOCK ???", 219, 308);
    }
  }

  function af(timeStamp) {
    d.clearRect(0, 0, c.width, c.height);
    achf();

    window.requestAnimationFrame(achf);
  }
  af();
}
function stats() {
  function statsf() {
    var treesp = JSON.parse(window.localStorage.getItem("totalr")) * 8;
    d.clearRect(0, 0, c.width, c.height);
    d.font = "50px VT323";
    d.fillStyle = "red";
    d.fillText("STATS", 205, 50);
    d.font = "20px VT323";
    d.fillText("HOME (H)", 224, 70);
    d.font = "30px VT323";
    d.fillText("LIFETIME STATS", 10, 120);

    d.font = "25px VT323";
    d.fillText("STAGES:" + window.localStorage.getItem("totalr"), 10, 160);
    d.fillText("TOKENS:" + window.localStorage.getItem("totalc"), 10, 200);
    d.fillText("OBSTACLES PASSED:" + treesp, 10, 240);
  }

  function stf(timeStamp) {
    d.clearRect(0, 0, c.width, c.height);
    statsf();

    window.requestAnimationFrame(statsf);
  }
  stf();
}

function shop() {
  function shopf() {
    if (window.localStorage.getItem("cubec") == null) {
      localStorage.setItem("cubec", 0);
    }

    if (window.localStorage.getItem("bluec") == null) {
      localStorage.setItem("bluec", 0);
    }

    if (window.localStorage.getItem("yellowc") == null) {
      localStorage.setItem("yellowc", 0);
    }

    if (window.localStorage.getItem("redc") == null) {
      localStorage.setItem("redc", 0);
    }

    if (window.localStorage.getItem("greenc") == null) {
      localStorage.setItem("greenc", 0);
    }

    if (window.localStorage.getItem("multic") == null) {
      localStorage.setItem("multic", 0);
    }

    d.clearRect(0, 0, c.width, c.height);

    d.font = "50px VT323";
    d.fillStyle = "red";
    d.fillText(" SHOP", 195, 50);
    d.fillStyle = "red";
    d.font = "15px VT323";
    d.rotate((20 * -Math.PI) / 180);
    d.fillText("MORE IN ACHIEVEMENTS", -10, 65);
    d.rotate((20 * Math.PI) / 180);
    d.font = "30px VT323";
    d.fillStyle = "Blue";
    d.fillText("BLUE", 100, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("100 TOKENS", 85, 130);
    d.fillText("PRESS(1)TO BUY/EQUIP", 50, 160);

    d.font = "30px VT323";
    d.fillStyle = "Red";
    d.fillText("RED", 100, 230);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("100 TOKENS", 80, 255);
    d.fillText("PRESS(3)TO BUY/EQUIP", 45, 280);

    d.font = "30px VT323";
    d.fillStyle = "Yellow";
    d.fillText(" YELLOW", 345, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText(" 100 TOKENS", 345, 130);
    d.fillText("PRESS(2)TO BUY/EQUIP", 315, 160);

    d.font = "30px VT323";
    d.fillStyle = "red";
    d.fillText(" TOKENS:" + localStorage.getItem("cdc"), 190, 100);
    d.font = "28px VT323";
    d.fillStyle = "red";
    d.fillText("HOME(H)", 219, 470);

    d.font = "30px VT323";
    d.fillStyle = "Green";
    d.fillText(" GREEN", 345, 230);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText(" 100 TOKENS", 345, 255);
    d.fillText("PRESS(4)TO BUY/EQUIP", 315, 280);

    d.font = "30px VT323";
    d.fillStyle = "Red";
    d.fillText(" R", 200, 330);
    d.fillStyle = "Orange";
    d.fillText(" A", 211, 330);
    d.fillStyle = "Yellow";
    d.fillText(" I", 222, 330);
    d.fillStyle = "Green";
    d.fillText(" N", 233, 330);
    d.fillStyle = "Blue";
    d.fillText(" B", 244, 330);
    d.fillStyle = "Indigo";
    d.fillText(" O", 255, 330);
    d.fillStyle = "Violet";
    d.fillText(" W", 266, 330);
    d.font = "20px VT323";
    d.fillStyle = "red";
    d.fillText(" 100,000 TOKENS", 189, 360);
    d.fillText("PRESS(5)TO BUY/EQUIP", 170, 390);
  }

  function sf(timeStamp) {
    d.clearRect(0, 0, c.width, c.height);
    shopf();

    window.requestAnimationFrame(shopf);
  }
  sf();
}

function check(e) {
  var code = e.keyCode;
  if (code == 39 && d1 != 70) {
    xx += j;
  }
  if (code == 37 && d1 != 70) {
    xx -= j;
  }
  if (code == 83 && ffff == 0 && akey == 0) {
    whole();
    ffff += 1;

    if (localStorage.getItem("cdc") == null) {
      localStorage.setItem("cdc", 0);
    }
    if (window.localStorage.getItem("highscore") == null) {
      localStorage.setItem("highscore", 0);
    }
    if (window.localStorage.getItem("totalr") == null) {
      localStorage.setItem("totalr", 0);
    }
    if (window.localStorage.getItem("totalc") == null) {
      localStorage.setItem("totalc", 0);
    }
  }

  if (code == 72 && ffff == 0) {
    location.reload();
  }

  if (d1 == 70 && code == 72) {
    location.reload();
  }

  if (code == 69 && ffff != 1) {
    dddd = 0;
    skey += 1;
    shop();
  }
  if (code == 65 && ffff != 1) {
    dddd = 0;

    akey += 1;
    ach();
  }

  if (code == 83 && ffff != 1 && akey == 1) {
    dddd = 0;

    stats();
  }
  if (
    code == 49 &&
    ffff != 1 &&
    akey == 1 &&
    localStorage.getItem("totalc") >= 1000000
  ) {
    d.clearRect(210, 180, 100, 30);
    d.fillText("EQUIPED", 236, 198);
    dddd = 0;
    window.localStorage.setItem("btype", 1);
    localStorage.setItem("imgbloc", 1);
  }

  if (
    code == 50 &&
    ffff != 1 &&
    akey == 1 &&
    localStorage.getItem("totalr") * 8 >= 80000
  ) {
    d.clearRect(210, 290, 100, 30);
    d.fillText("EQUIPED", 225, 305);
    dddd = 0;
    window.localStorage.setItem("btype", 1);
    localStorage.setItem("imgbloc", 2);
  }

  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }

  if (
    code == 49 &&
    skey == 1 &&
    localStorage.getItem("cdc") >= 100 &&
    localStorage.getItem("bluec") == 0
  ) {
    var cash = JSON.parse(window.localStorage.getItem("cdc"));
    var ayel = (cash -= 100);
    window.localStorage.setItem("cdc", ayel);

    window.localStorage.setItem("bluec", 1);

    d.clearRect(70, 110, 130, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("PURCHASED", 90, 130);
  }

  if (code == 49 && skey == 1 && localStorage.getItem("bluec") == 1) {
    window.localStorage.setItem("cubec", 1);

    d.clearRect(50, 110, 160, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("EQUIPPED", 90, 130);
    window.localStorage.setItem("btype", 0);
  }

  if (
    code == 51 &&
    skey == 1 &&
    localStorage.getItem("cdc") >= 100 &&
    localStorage.getItem("redc") == 0
  ) {
    var cash = JSON.parse(window.localStorage.getItem("cdc"));
    var ayel = (cash -= 100);
    window.localStorage.setItem("cdc", ayel);

    window.localStorage.setItem("redc", 1);

    d.clearRect(45, 235, 170, 70);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("PURCHASED", 90, 250);
  }

  if (code == 51 && skey == 1 && localStorage.getItem("redc") == 1) {
    window.localStorage.setItem("cubec", 3);

    d.clearRect(45, 235, 170, 70);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("EQUIPPED", 90, 260);
    window.localStorage.setItem("btype", 0);
  }

  if (
    code == 53 &&
    skey == 1 &&
    localStorage.getItem("cdc") >= 100000 &&
    localStorage.getItem("multic") == 0
  ) {
    var cash = JSON.parse(window.localStorage.getItem("cdc"));
    var ayel = (cash -= 100000);
    window.localStorage.setItem("cdc", ayel);

    window.localStorage.setItem("multic", 1);

    d.clearRect(189, 343, 140, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("PURCHASED", 189, 360);
  }

  if (code == 53 && skey == 1 && localStorage.getItem("multic") == 1) {
    window.localStorage.setItem("cubec", 5);

    d.clearRect(169, 343, 160, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("EQUIPPED", 215, 360);
    window.localStorage.setItem("btype", 0);
  }

  if (
    code == 52 &&
    skey == 1 &&
    localStorage.getItem("cdc") >= 100 &&
    localStorage.getItem("greenc") == 0
  ) {
    var cash = JSON.parse(window.localStorage.getItem("cdc"));
    var ayel = (cash -= 100);
    window.localStorage.setItem("cdc", ayel);

    window.localStorage.setItem("greenc", 1);

    d.clearRect(300, 240, 190, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("PURCHASED", 355, 250);
  }

  if (code == 52 && skey == 1 && localStorage.getItem("greenc") == 1) {
    window.localStorage.setItem("cubec", 4);

    d.clearRect(300, 240, 190, 100);
    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("EQUIPPED", 355, 260);
    window.localStorage.setItem("btype", 0);
  }

  if (
    code == 50 &&
    skey == 1 &&
    localStorage.getItem("cdc") >= 100 &&
    localStorage.getItem("yellowc") == 0
  ) {
    var cash = JSON.parse(window.localStorage.getItem("cdc"));
    var ayel = (cash -= 100);
    window.localStorage.setItem("cdc", ayel);
    window.localStorage.setItem("yellowc", 1);
    d.clearRect(300, 110, 190, 100);

    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("PURCHASED", 360, 130);
  }

  if (code == 50 && skey == 1 && localStorage.getItem("yellowc") == 1) {
    window.localStorage.setItem("yellowc", 1);
    d.clearRect(300, 110, 190, 100);

    d.fillStyle = "red";
    d.font = "20px VT323";
    d.fillText("EQUIPPED", 360, 130);
    window.localStorage.setItem("cubec", 2);
    window.localStorage.setItem("btype", 0);
  }

  if (
    code == 49 &&
    skey == 1 &&
    localStorage.getItem("cdc") < 100 &&
    ap == 0 &&
    localStorage.getItem("bluec") != 1
  ) {
    d.font = "20px VT323";
    d.fillStyle = "RED";
    d.fillText("NOT ENOUGH TOKENS", 190, 120);
    ap += 1;
  }

  if (
    code == 50 &&
    skey == 1 &&
    localStorage.getItem("cdc") < 100 &&
    ap == 0 &&
    localStorage.getItem("yellowc") != 1
  ) {
    d.font = "20px VT323";
    d.fillStyle = "RED";
    d.fillText("NOT ENOUGH TOKENS", 190, 120);
    ap += 1;
  }

  if (
    code == 53 &&
    skey == 1 &&
    localStorage.getItem("cdc") < 100000 &&
    ap == 0 &&
    localStorage.getItem("multic") != 1
  ) {
    d.font = "20px VT323";
    d.fillStyle = "RED";
    d.fillText("NOT ENOUGH TOKENS", 190, 120);
    ap += 1;
  }

  if (
    code == 51 &&
    skey == 1 &&
    localStorage.getItem("cdc") < 100 &&
    ap == 0 &&
    localStorage.getItem("redc") != 1
  ) {
    d.font = "20px VT323";
    d.fillStyle = "RED";
    d.fillText("NOT ENOUGH TOKENS", 190, 120);
    ap += 1;
  }
  if (
    code == 52 &&
    skey == 1 &&
    localStorage.getItem("cdc") < 100 &&
    ap == 0 &&
    localStorage.getItem("greenc") != 1
  ) {
    d.font = "20px VT323";
    d.fillStyle = "RED";
    d.fillText("NOT ENOUGH TOKENS", 190, 120);
    ap += 1;
  }
}

function update() {
  if (window.localStorage.getItem("cubec") == 0) {
    tc = "black";
  }

  if (window.localStorage.getItem("cubec") == 1) {
    tc = "blue";
  }
  if (window.localStorage.getItem("cubec") == 2) {
    tc = "yellow";
  }

  if (window.localStorage.getItem("cubec") == 3) {
    tc = "red";
  }
  if (window.localStorage.getItem("cubec") == 4) {
    tc = "green";
  }
  if (window.localStorage.getItem("cubec") == 5) {
    if (rainb == 1) {
      tc = "red";
    }
    if (rainb == 2) {
      tc = "orange";
    }
    if (rainb == 3) {
      tc = "yellow";
    }
    if (rainb == 4) {
      tc = "green";
    }
    if (rainb == 5) {
      tc = "blue";
    }
    if (rainb == 6) {
      tc = "indigo";
    }
    if (rainb == 7) {
      rainb -= 7;
      tc = "violet";
    }
  }

  if (
    (xx < x + 25 && xx > x + 7 && yy < y + 45 && yy > y - 10) ||
    (xx < x1 + 25 && xx > x1 + 7 && yy < y1 + 45 && yy > y1 - 10) ||
    (xx < x2 + 25 && xx > x2 + 7 && yy < y2 + 45 && yy > y2 - 10) ||
    (xx < x3 + 25 && xx > x3 + 7 && yy < y3 + 45 && yy > y3 - 10) ||
    (xx < x4 + 25 && xx > x4 + 7 && yy < y4 + 45 && yy > y4 - 10) ||
    (xx < x5 + 25 && xx > x5 + 7 && yy < y5 + 45 && yy > y5 - 10) ||
    (xx < x6 + 25 && xx > x6 + 7 && yy < y6 + 45 && yy > y6 - 10) ||
    (xx < x7 + 25 && xx > x7 + 7 && yy < y7 + 45 && yy > y7 - 10) ||
    (xx < vx + 25 && xx > vx + 7 && yy < vy + 45 && yy > vy - 10) ||
    (xx < vx1 + 25 && xx > vx1 + 7 && yy < vy1 + 45 && yy > vy1 - 10) ||
    (xx < vx2 + 25 && xx > vx2 + 7 && yy < vy2 + 45 && yy > vy2 - 10) ||
    (xx < vx3 + 25 && xx > vx3 + 7 && yy < vy3 + 45 && yy > vy3 - 10) ||
    (xx < vx4 + 25 && xx > vx4 + 7 && yy < vy4 + 45 && yy > vy4 - 10) ||
    (xx < vx5 + 25 && xx > vx5 + 7 && yy < vy5 + 45 && yy > vy5 - 10) ||
    (xx < vx6 + 25 && xx > vx6 + 7 && yy < vy6 + 45 && yy > vy6 - 10) ||
    (xx < vx7 + 25 && xx > vx7 + 7 && yy < vy7 + 45 && yy > vy7 - 10)
  ) {
    yy += 0;
    if (st > JSON.parse(window.localStorage.getItem("highscore"))) {
      localStorage.removeItem("highscore");

      window.localStorage.setItem("highscore", st);
    }

    if (ads == 1) {
      var fi = JSON.parse(window.localStorage.getItem("cdc"));
      var chi = (fi += coin);
      window.localStorage.setItem("cdc", chi);
      ads += 1;
      ssad += 1;
      d1 = 70;
      d2 = 200;
      d3 = 185;
    }

    if (thek == 1) {
      var themc = JSON.parse(window.localStorage.getItem("totalr"));
      var them = (themc += totr);
      window.localStorage.setItem("totalr", them);
      thek += 1;
    }
    if (thekc == 1) {
      var themcx = JSON.parse(window.localStorage.getItem("totalc"));
      var themx = (themcx += coin);
      window.localStorage.setItem("totalc", themx);
      thekc += 1;
    }
    if (localStorage.getItem("totalr") < fi) {
      window.localStorage.clear();
    }
  } else {
    yy += l;
  }

  if (xx <= 0) {
    xx += j;
  }
  if (xx >= 490) {
    xx -= j;
  }

  if (yy > 500) {
    tree();
    d.clearRect(0, 0, c.width, c.height);
    rainb += 1;
    st += 1;
    totr += 1;
    coin += 1;
    asas += 1;
    yy = 10;
    xx = xx;
    if (st == 30) {
      l += 1;
    }
    if (l < 4) {
      l += 0.2;
      j += 1;
    }

    if (st > 14 && st % 5 == 0 && st != 40) {
      l += 0.2;
      j += 0.5;
    }
  }
}

function whole() {
  gameLoop();
}

var sped = 5;
var sped1 = 6;
var sped2 = 4;

function start() {
  function font() {
    d.drawImage(img, 0, 440, 45, 60);
    d.drawImage(img, 455, 440, 45, 60);
    if (window.localStorage.getItem("totalc") >= 1000000) {
      d.drawImage(coinimg, sx, 485, 15, 15);
    }
    if (window.localStorage.getItem("totalr") * 8 >= 80000) {
      d.drawImage(treeimg, sx2, 487, 15, 15);
    }
    d.fillRect(sx1, 490, 10, 10);

    d.font = "50px VT323";
    d.fillStyle = "red";
    d.fillText(" ALL DOWN HILL", 100, 150);
    d.font = "30px VT323";
    d.fillText(" START (S)", 200, 200);
    d.fillText(" SHOP (E)", 201, 250);
    d.fillText(" STATS & ACHIEVEMENTS (A)", 101, 300);
  }

  function f(timeStamp) {
    d.clearRect(0, 0, c.width, c.height);
    font();

    if (sx == 460) {
      sped += -10;
    }

    if (sx <= 27) {
      sped += 10;
    }
    sx += sped;

    if (sx1 == 460) {
      sped1 += -12;
    }

    if (sx1 <= 27) {
      sped1 += 12;
    }
    sx1 += sped1;

    if (sx2 == 460) {
      sped2 += -8;
    }

    if (sx2 <= 27) {
      sped2 += 8;
    }
    sx2 += sped2;

    /**/

    window.requestAnimationFrame(dddd);
  }
  f();
}
start();

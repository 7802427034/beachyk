// Canvas Make-A-Scene

// Canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1800;
cnv.height = 1080;

// animation variables
let bird1X = -1000;
let bird1Y = 20;
let bird2X = -5;
let bird2Y = 90;
let sunX = 125;
let sunY = 360;

let skyR1 = 0;
let skyG1 = 204;
let skyB1 = 255;

let skyR2 = 0;
let skyG2 = 255;
let skyB2 = 255;

let sandR1 = 254;
let sandG1 = 236;
let sandB1 = 190;

let waterR = 104;
let waterG = 178;
let waterB = 238;

let img1X = 75;
let img2X = 200;
let img3X = 80;
let img4X = 250;
let img5X = 600;

let img1Y = 50;
let img2Y = 150;
let img3Y = 80;
let img4Y = 250;
let img5Y = 300;

let frame = 0;
let x = 1;

let spaceDown = false;

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.code == "Space") {
    spaceDown = true;
  }
}

function keyupHandler(event) {
  if (event.code == "Space") {
    spaceDown = false;
  }
}

// top left: 0,0
// top right: 1800,0
// bottom left: 0, 1080
// bottom right 1800,1080
// Track frames gone by

requestAnimationFrame(draw);
function draw() {
  console.log(spaceDown);
  // Sky with Horizon (sun)
  //
  var grd2 = ctx.createLinearGradient(0, 0, 0, 360);
  grd2.addColorStop(0, `rgb(${skyR1}, ${skyG1}, ${skyB1})`);
  grd2.addColorStop(1, `rgb(${skyR2}, ${skyG2}, ${skyB2})`);

  ctx.fillStyle = grd2;
  ctx.fillRect(0, 0, 1800, 1080);

  // update timing
  if (spaceDown == false) {
    frame++;
  }

  // sun
  ctx.fillStyle = "gold";
  ctx.beginPath();
  ctx.arc(sunX, sunY, 125, 2 * Math.PI, 0);
  ctx.fill();

  // Sand
  ctx.fillStyle = `rgb(${sandR1}, ${sandG1}, ${sandB1})`;
  ctx.fillRect(0, 720, 1800, 360);

  // Water with waves
  ctx.fillStyle = `rgb(${waterR}, ${waterG}, ${waterB})`;
  ctx.fillRect(0, 360, 1800, 360);

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(100, 400);
  ctx.bezierCurveTo(150, 450, 200, 450, 250, 400);
  ctx.stroke();

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(250, 400);
  ctx.bezierCurveTo(300, 450, 350, 450, 400, 400);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(600, 650);
  ctx.bezierCurveTo(650, 700, 700, 700, 750, 650);
  ctx.stroke();

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(750, 650);
  ctx.bezierCurveTo(800, 700, 850, 700, 900, 650);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(900, 520);
  ctx.bezierCurveTo(950, 570, 1000, 570, 1050, 520);
  ctx.stroke();

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1050, 520);
  ctx.bezierCurveTo(1100, 570, 1150, 570, 1200, 520);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(275, 600);
  ctx.bezierCurveTo(325, 650, 375, 650, 425, 600);
  ctx.stroke();

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(425, 600);
  ctx.bezierCurveTo(475, 650, 525, 650, 575, 600);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1400, 400);
  ctx.bezierCurveTo(1450, 450, 1500, 450, 1550, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1550, 400);
  ctx.bezierCurveTo(1600, 450, 1650, 450, 1700, 400);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1250, 590);
  ctx.bezierCurveTo(1300, 640, 1350, 640, 1400, 590);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1400, 590);
  ctx.bezierCurveTo(1450, 640, 1500, 640, 1550, 590);
  ctx.stroke();

  // wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(500, 440);
  ctx.bezierCurveTo(550, 490, 600, 490, 650, 440);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(650, 440);
  ctx.bezierCurveTo(700, 490, 750, 490, 800, 440);
  ctx.stroke();

  //wave

  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(950, 370);
  ctx.bezierCurveTo(1000, 420, 1050, 420, 1100, 370);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(1100, 370);
  ctx.bezierCurveTo(1150, 420, 1200, 420, 1250, 370);
  ctx.stroke();

  ctx.font = "20px Georgia";
  ctx.fillText("Frame: " + frame, 20, 20);

  // Beach chair

  // back legs

  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(150, 975);
  ctx.lineTo(150, 1000);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200, 975);
  ctx.lineTo(200, 1000);
  ctx.stroke();

  // Chair back
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(200, 975);
  ctx.lineTo(150, 975);
  ctx.lineTo(130, 925);
  ctx.lineTo(180, 925);
  ctx.lineTo(200, 975);
  ctx.fill();
  ctx.stroke();

  // Chair body
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(190, 950);
  ctx.lineTo(250, 920);
  ctx.lineTo(300, 920);
  ctx.lineTo(200, 975);
  ctx.lineTo(190, 950);
  ctx.stroke();
  ctx.fill();

  // end leg
  ctx.beginPath();
  ctx.moveTo(300, 920);
  ctx.lineTo(300, 945);
  ctx.stroke();

  // middle leg
  ctx.beginPath();
  ctx.moveTo(250, 947.5);
  ctx.lineTo(250, 965);
  ctx.stroke();

  //

  // back legs
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(350, 975);
  ctx.lineTo(350, 1000);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 975);
  ctx.lineTo(400, 1000);
  ctx.stroke();

  // chair back
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(350, 975);
  ctx.lineTo(400, 975);
  ctx.lineTo(380, 925);
  ctx.lineTo(330, 925);
  ctx.lineTo(350, 975);
  ctx.stroke();
  ctx.fill();

  // // chair body
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(390, 950);
  ctx.lineTo(450, 920);
  ctx.lineTo(500, 920);
  ctx.lineTo(500, 920);
  ctx.lineTo(400, 975);
  ctx.lineTo(390, 950);
  ctx.stroke();
  ctx.fill();

  // end leg
  ctx.beginPath();
  ctx.moveTo(500, 920);
  ctx.lineTo(500, 945);
  ctx.stroke();

  // middle leg
  ctx.beginPath();
  ctx.moveTo(450, 947.5);
  ctx.lineTo(450, 965);
  ctx.stroke();

  // water flowing into sand
  ctx.strokeStyle = `rgb(${waterR}, ${waterG}, ${waterB})`;
  ctx.fillStyle = `rgb(${waterR}, ${waterG}, ${waterB})`;
  ctx.beginPath();
  ctx.moveTo(1100, 720);
  ctx.lineTo(700, 720);
  ctx.bezierCurveTo(650, 770, 650, 820, 700, 870);
  ctx.bezierCurveTo(750, 920, 750, 970, 700, 1020);

  ctx.moveTo(1100, 720);
  ctx.bezierCurveTo(1050, 770, 1050, 820, 1100, 870);
  ctx.bezierCurveTo(1150, 920, 1150, 970, 1100, 1020);

  ctx.bezierCurveTo(1100, 1070, 700, 1070, 700, 1020);
  ctx.stroke();
  ctx.fill();

  // lifeguard tower

  // base
  ctx.strokeStyle = "black";
  ctx.lineWidth = "3";
  ctx.beginPath();
  ctx.moveTo(1550, 1080);
  ctx.lineTo(1575, 950);
  ctx.lineTo(1675, 950);
  ctx.lineTo(1700, 1080);
  ctx.stroke();

  // body
  ctx.strokeStyle = "black";
  ctx.fillStyle = "rgb(240, 89, 39)";
  ctx.beginPath();
  ctx.moveTo(1575, 950);
  ctx.lineTo(1550, 800);
  ctx.lineTo(1700, 800);
  ctx.lineTo(1675, 950);
  ctx.lineTo(1575, 950);
  ctx.moveTo(1675, 950);
  ctx.lineTo(1700, 800);
  ctx.stroke();
  ctx.fill();

  // roof
  ctx.strokeStyle = "black";
  ctx.fillStyle = "rgb(240, 89, 39)";
  ctx.beginPath();
  ctx.moveTo(1750, 800);
  ctx.lineTo(1500, 800);
  ctx.lineTo(1625, 725);
  ctx.lineTo(1750, 800);
  ctx.stroke();
  ctx.fill();

  // window for tower
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.moveTo(1580, 825);
  ctx.lineTo(1670, 825);
  ctx.lineTo(1650, 925);
  ctx.lineTo(1600, 925);
  ctx.lineTo(1580, 825);
  ctx.stroke();
  ctx.fill();

  ctx.lineWidth = "1";
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(1625, 825);
  ctx.lineTo(1625, 925);
  ctx.moveTo(1590, 875);
  ctx.lineTo(1660, 875);
  ctx.stroke();

  // beach ball
  var bball = document.getElementById("bball");
  ctx.drawImage(bball, 450, 850, img1X, img1Y);

  // sand castle
  var scastle = document.getElementById("scastle");
  ctx.drawImage(scastle, 200, 780, 90, 90);

  // surfboard
  var srfbrd = document.getElementById("srfbrd");
  ctx.drawImage(srfbrd, 1300, 800, img2X, img2Y);

  // beach towels
  var bchtwls = document.getElementById("bchtwls");
  ctx.drawImage(bchtwls, 500, 950, img3X, img3Y);

  // beach tube
  var btube = document.getElementById("btube");
  ctx.drawImage(btube, 800, 800, img4X, img4Y);

  // killer whale
  var kwhale = document.getElementById("kwhale");
  ctx.drawImage(kwhale, 1300, 400, img5X, img5Y);

  var bird1 = document.getElementById("bird1");
  ctx.drawImage(bird1, bird1X, bird1Y, 100, 100);

  var bird2 = document.getElementById("bird1");
  ctx.drawImage(bird2, bird2X, bird2Y, 100, 100);

  if (spaceDown == false) {
    // bird motions
    if (bird1X <= 1900) {
      bird1X += 5;
    }
    if (bird1X == 1900) {
      bird1X = -50;
    }
    if (bird2X <= 1900) {
      bird2X += 5;
    }
    if (bird2X == 1900) {
      bird2X = -20;
    }

    // sun motions thru sky
    if (sunX <= 900) {
      sunX++;
      sunY -= 0.5;
      if (skyG1 <= 204) {
        skyG1++;
      }
      if (skyB1 <= 255) {
        skyB1++;
      }

      if (skyG2 <= 255) {
        skyG2++;
      }
      if (skyB2 <= 255) {
        skyB2++;
      }
      if (sandR1 <= 254) {
        sandR1++;
      }
      if (sandG1 <= 236) {
        sandG1++;
      }
      if (sandB1 <= 190) {
        sandB1++;
      }
      if (waterR <= 104) {
        waterR++;
      }
      if (waterG <= 178) {
        waterG++;
      }
      if (waterB <= 238) {
        waterB++;
      }
    }
    if (sunX >= 900) {
      sunX++;
      sunY += 0.5;
    }
    if (sunX >= 1100 && frame >= 700) {
      if (skyR1 >= 0) {
        skyR1--;
      }
      if (skyG1 >= 0) {
        skyG1--;
      }
      if (skyB1 >= 0) {
        skyB1--;
      }
      if (skyR2 >= 0) {
        skyR2--;
      }
      if (skyG2 <= 255) {
        skyG2++;
      }
      if (skyB2 <= 255) {
        skyB2++;
      }
      if (sandR1 >= 194) {
        sandR1--;
      }
      if (sandG1 >= 161) {
        sandG1--;
      }
      if (sandB1 >= 78) {
        sandB1--;
      }
      if (frame >= 1100 && bird1X > 1850) {
        bird1X = 1850;
      }
      if (frame >= 1100 && bird2X > 1850) {
        bird2X = 1850;
      }
      if (waterR >= 18) {
        waterR--;
      }
      if (waterG >= 111) {
        waterG--;
      }
      if (waterB >= 187) {
        waterB--;
      }
    }
    if (frame >= 1900 && sunX > 1900) {
      sunX = 0;
      sunY = 425;
      sunX++;
      sunY += 0.5;
      bird1X = -20;
      bird2X = -80;
      bird1X += 5;
      bird2X += 5;
      frame = 0;
    }
  }

  requestAnimationFrame(draw);
}

// change sun direction
// change sky colour
// try a wave
// animate birds over the sky

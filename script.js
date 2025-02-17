'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("Hello");

const imgOfCar = document.getElementById("car-image");
// 画像の位置を取得
const rect = imgOfCar.getBoundingClientRect();
const textPointedPart = document.getElementById("text-show");

// 画像をマウスホバーしたら、処理する
imgOfCar.addEventListener("mouseover",function(event) {
  // console.log("ホバーされました");
  document.getElementsByClassName("gray-box")[0].style.backgroundColor = "yellow";
  console.log(event.offsetX);
});

// 画像からマウスカーソルが離れたら、処理する
imgOfCar.addEventListener("mouseleave", function() {
  // console.log("マウスカーソルが離れました");
  document.getElementsByClassName("gray-box")[0].style.backgroundColor = "gray";
  textPointedPart.innerText = "";
})

// function showCursorPosition() {
//   console.log(mouseCursor.offsetX)
// }

// 画像をクリックしたら、座標位置を表示する
imgOfCar.addEventListener("click",function(event) {
  // console.log("クリックされました");
  console.log(event.offsetX);
});

// const textHood = document.getElementById("text-hood");
// const hoodXMin = 60;
// const hoodXMax = 160;
// const hoodYMin = 70;
// const hoodYMax = 120;

// const arrayOfPartArea = [
//   {partName: "フード", xMin: 140, xMax: 370, yMin: 160, yMax: 270}, 
//   {partName: "グリル", xMin: 130, xMax: 310, yMin: 320, yMax: 390},
//   {partName: "ヘッドランプ", xMin: 130, xMax: 310, yMin: 320, yMax: 390}
// ]
const arrayOfPartArea = [
  {partName: "フード", xMin: 0.15, xMax: 0.36, yMin: 0.29, yMax: 0.52}, 
  {partName: "グリル", xMin: 0.14, xMax: 0.31, yMin: 0.61, yMax: 0.75},
  {partName: "ヘッドランプ", xMin: 0.40, xMax: 0.46, yMin: 0.36, yMax: 0.50},
  {partName: "ヘッドランプ", xMin: 0.07, xMax: 0.13, yMin: 0.33, yMax: 0.48},
  {partName: "ウインドシールドガラス", xMin: 0.25, xMax: 0.62, yMin: 0.07, yMax: 0.28}
]


// 画像上でカーソル移動したら、処理する
imgOfCar.addEventListener("mousemove",function(event) {
  // console.log("カーソル移動されました");
  // 画像に対するマウスカーソルの相対位置を取得する
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  // imgOfCar.style.width
  // 画像サイズに対する比率に変換する
  // const xRatio = x / 990;   //990を変数にしたい
  // const yRatio = y / 520;   //520を変数にしたい
  const xRatio = x / imgOfCar.width;
  const yRatio = y / imgOfCar.height;
  // console.log(`${x}, ${y}`);
  console.log(`${xRatio}, ${yRatio}`);

  for (const obj of arrayOfPartArea) {
    if (obj.xMin < xRatio && xRatio < obj.xMax 
      && obj.yMin < yRatio && yRatio < obj.yMax) {
        // console.log(obj.partName);
        console.log(`ここは${obj.partName}です`);
        // textPointedPart.innerText = "";
        textPointedPart.innerText = `ここは${obj.partName}です`;
        // 見つけたらループを抜ける
        break;
      } else {
        // textPointedPart.innerText = "";
        textPointedPart.innerText = "ここは部位を設定していません";
    }
  }
  // if (hoodXMin < x 
  //   && x < hoodXMax 
  //   && hoodYMin < y 
  //   && y < hoodYMax) {
  //   // console.log("ここは○○です");
  //   textHood.style.display = "block";
  // } else {
  //   textHood.style.display = "none";
  // }
  // document.getElementsByClassName("gray-box")[0].style.backgroundColor = "yellow";
  // console.log(event.offsetX);
});

const btn = document.getElementById("button-cheating");

btn.addEventListener("click", function() {
  const cheatingText = document.getElementsByClassName("cheating")[0];
  if (btn.innerText === "カンニング") {
    cheatingText.style.display = "flex";
    btn.innerText = "非表示"
  } else {
    cheatingText.style.display = "none";
    btn.innerText = "カンニング"
  }
})

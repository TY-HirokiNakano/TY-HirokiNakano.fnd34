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

const arrayOfPartArea = [
  {partName: "フード", xMin: 60, xMax: 160, yMin: 70, yMax: 120}, 
  {partName: "グリル", xMin: 60, xMax: 135, yMin: 140, yMax: 165}
]


// 画像上でカーソル移動したら、処理する
imgOfCar.addEventListener("mousemove",function(event) {
  // console.log("カーソル移動されました");
  // 画像に対するマウスカーソルの相対位置を取得する
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`${x}, ${y}`);
  for (const obj of arrayOfPartArea) {
    if (obj.xMin < x 
      && x < obj.xMax 
      && obj.yMin < y 
      && y < obj.yMax) {
        console.log(obj.partName);
        textPointedPart.innerText = `ここは${obj.partName}です`;
      // } else if (obj.xMin < x) {
      //   console.log(obj.partName);
      //   textPointedPart.innerText = `ここは${obj.partName}です`;        
      } else {
        textPointedPart.innerText = "";
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

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("Hello")

function addGators() {
  // inputの値を取得
  const number = document.getElementById("inputnumber").value;
  // console.log(number);
  
  // 青い箱の値を取得
  // console.log(document.getElementsByClassName("blue")[0].innerText);
  
  // 青い箱の値を初期化
  document.getElementsByClassName("blue")[0].innerText = "";
  
  let result = "";
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      result += "🐊";
    }  
  }
  
  // 青い箱に入力
  document.getElementsByClassName("blue")[0].innerText = result;
  

  // document.getElementsByClassName("blue")[0] = "成功"
  // document.getElementsByClassName("blue").value = "🐊"
  // console.log("成功");
}

const buttonClick = document.getElementById("inputbutton");
// console.log(typeof buttonClick);
buttonClick.addEventListener("click", addGators);

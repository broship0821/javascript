//html에 접근하는 방법
//DOM: document object module
console.log(document); //html 전체 가져오기
const title = document.getElementById("title");
console.log(title);
title.innerHTML="난 자바스크립트!";
/////////////////마우스 이벤트/////////////////

var myHeader = document.getElementById("header");
// console.log(document.getElementById("header"));
myHeader.onmouseover = function(){
    console.log("this");
    console.log("myHeader");
    // this.style.backgroundColor = "white";
    this.classList.add("over");
}

//문서에 id가 header인 요소를 가져오고 마우스가 아웃되었을 시 
myHeader.onmouseout = function(){
    //문서에 id가 header인 요소를 가져오고 마우스가 아웃 되었을 시
    //백그라운드의 스타일 컬러를 바꿉니다.
    // this.style.backgroundColor = "rgba(0,0,0,0.5)";
    this.classList.remove("over");
}

//function (){} = 즉시실행

/////////////////스크롤 이벤트/////////////////
window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    // 만약에 스크롤y가 200이상으면 콘솔에 '200이상' 문자를 띄워라
    if(window.scrollY > 200){
        myHeader.style.top = -100 + "px";
        // myHeader.classList.add("down")
        // myHeader.classList.remove("up")
    } else {
        myHeader.style.top = 0 + "px";
        // myHeader.classList.remove("down")
        // myHeader.classList.add("up")
    }
});



// 챗 GPT의 스크롤 이벤트 답안지
// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   if (window.scrollY > 200) {
//     header.style.display = "none";
//   } else {
//     header.style.display = "block";
//   }
// });

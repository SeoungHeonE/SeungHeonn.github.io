// "topBtn" 변수는 id가 "topBtn"인 요소를 선택합니다.
const topBtn = document.getElementById('topBtn');

// 윈도우 스크롤 이벤트를 등록합니다.
window.addEventListener('scroll', () => {
// "window.pageYOffset" 속성을 사용하여 브라우저 창에서 세로 스크롤 위치를 가져옵니다.
if (window.pageYOffset > 100) {
// "hidden" 클래스를 "topBtn" 요소에서 제거하여 버튼을 보이도록 합니다.
topBtn.classList.remove('hidden');
} else {
// "hidden" 클래스를 "topBtn" 요소에 추가하여 버튼을 숨기도록 합니다.
topBtn.classList.add('hidden');
}
});

// "topBtn" 요소에 클릭 이벤트를 등록합니다.
topBtn.addEventListener('click', () => {
// "scrollTo" 메소드를 사용하여 페이지 상단으로 부드럽게 스크롤합니다.
window.scrollTo({ top: 0, behavior: 'smooth' });
});

//"getElementById" 메소드를 사용하여 "topBtn" 요소를 선택합니다. 
//스크롤 이벤트가 발생하면 "window.pageYOffset" 속성을 사용하여 브라우저 창에서 세로 스크롤 위치를 가져옵니다. 
//그리고 "if...else" 구문을 사용하여 스크롤 위치가 일정 위치 이상이면 "hidden" 클래스를 "topBtn" 요소에서 
//제거하여 버튼을 보이게 하고, 그렇지 않으면 "hidden" 클래스를 "topBtn" 요소에 추가하여 버튼을 숨기도록 합니다. 
//또한 "addEventListener" 메소드를 사용하여 "topBtn" 요소에 클릭 이벤트를 등록합니다. 
//클릭 이벤트가 발생하면 "scrollTo" 메소드를 사용하여 페이지 상단으로 부드럽게 스크롤하도록 합니다.
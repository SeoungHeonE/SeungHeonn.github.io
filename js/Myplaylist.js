// "playlist" 변수는 id가 "playlist"인 요소를 선택합니다.
const playlist = document.querySelector('#playlist');
// "playlistText" 변수는 id가 "playlist"인 요소 내부의 "h1" 요소를 선택합니다.
const playlistText = document.querySelector('#playlist h1');

// 윈도우 스크롤 이벤트를 등록합니다.
window.addEventListener('scroll', () => {
// "getBoundingClientRect()" 메소드를 사용하여 요소의 위치를 계산합니다.
const rect = playlist.getBoundingClientRect();
// 현재 브라우저 윈도우의 높이를 가져옵니다.
const windowHeight = window.innerHeight;

// 텍스트 요소가 보이는 영역 안에 있을 때
if (rect.top >= 0 && rect.bottom <= windowHeight) {
// "visible" 클래스를 "playlistText" 요소에 추가하여 텍스트를 보이도록 합니다.
playlistText.classList.add('visible');
} else {
// "visible" 클래스를 "playlistText" 요소에서 제거하여 텍스트를 숨기도록 합니다.
playlistText.classList.remove('visible');
}
});

//먼저 "querySelector" 메소드를 사용하여 "playlist" 요소와 "playlistText" 요소를 선택합니다. 
//스크롤 이벤트가 발생하면 "getBoundingClientRect" 메소드를 사용하여 "playlist" 요소의 위치를 계산하고, 
//현재 브라우저 윈도우의 높이를 가져옵니다. 그리고 "if...else" 구문을 사용하여 "playlist" 요소가 보이는 
//영역 안에 있을 때 "visible" 클래스를 "playlistText" 요소에 추가하고, 
//그렇지 않으면 "visible" 클래스를 "playlistText" 요소에서 제거하여 텍스트를 숨기도록 합니다.
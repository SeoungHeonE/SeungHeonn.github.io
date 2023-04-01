window.addEventListener('scroll', () => {
  // 스크롤 위치가 100px 이상이면 'topBtn' 보이게합니다.
  if (window.pageYOffset > 100) {
    topBtn.classList.remove('hidden');

    // 스크롤 위치가 화면 맨 아래에서 80px 이내이면 'topBtn'에 'white' 클래스 추가합니다.
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight - 80) {
      topBtn.classList.add('white');
    } else {
      topBtn.classList.remove('white');
    }
  } else {
    // 스크롤 위치가 100px 미만이면 'topBtn' 숨깁니다.
    topBtn.classList.add('hidden');
  }
});

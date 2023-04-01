const fadeIn = (elem) => {
  elem.classList.add('fade-in');
  }
  
  // "fadeOut" 함수는 전달된 요소에서 'fade-in' 클래스를 제거하여 페이드 아웃 애니메이션을 적용합니다.
  const fadeOut = (elem) => {
  elem.classList.remove('fade-in');
  }
  
  // 윈도우 스크롤 이벤트를 등록합니다.
  window.addEventListener('scroll', () => {
  // "fade-image" ID를 가진 요소를 선택합니다.
  const element = document.getElementById('fade-image');
  // "getBoundingClientRect()" 메소드를 사용하여 요소의 위치를 계산합니다.
  const position = element.getBoundingClientRect();
  
  // 요소가 화면에 완전히 보일 때 페이드 인 애니메이션을 적용합니다.
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
  fadeIn(element);
  // "querySelectorAll" 메소드를 사용하여 "section2"의 제목과 본문 모든 요소를 선택하고,
  // "forEach" 메소드를 사용하여 각 요소에 대해 "fadeIn" 함수를 호출하여 페이드 인 애니메이션을 적용합니다.
  document.querySelectorAll('#section2 h1, #section2 p').forEach((elem) => fadeIn(elem));
  } else { // 요소가 화면에 보이지 않을 때 페이드 아웃 애니메이션을 적용합니다.
  fadeOut(element);
  // "querySelectorAll" 메소드를 사용하여 "section2"의 제목과 본문 모든 요소를 선택하고,
  // "forEach" 메소드를 사용하여 각 요소에 대해 "fadeOut" 함수를 호출하여 페이드 아웃 애니메이션을 적용합니다.
  document.querySelectorAll('#section2 h1, #section2 p').forEach((elem) => fadeOut(elem));
  }
  });
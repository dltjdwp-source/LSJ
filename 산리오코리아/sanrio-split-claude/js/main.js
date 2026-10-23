/* main.js : 메인 페이지 전용 기능 - 메인 배너(모바일 슬로건 이미지) 대체 처리
   모바일용 이미지 파일이 없거나 로딩에 실패하면 PC 이미지로 바꿔 보여준다.
   (기존에는 <img>의 onerror 속성에 인라인으로 들어 있던 코드) */

const 모바일배너 = document.querySelector(".banner-area .main-visual-mobile");

// 모바일 배너 이미지가 있는 페이지(메인 페이지)에서만 실행!
if (모바일배너) {
  const 대체하기 = function () {
    모바일배너.onerror = null; // 무한 반복 방지
    모바일배너.src = "./images/main_visual_pc_v1.png";
  };

  모바일배너.onerror = 대체하기;

  // 스크립트가 실행되기 전에 이미 로딩 실패한 경우도 처리
  if (모바일배너.complete && 모바일배너.naturalWidth === 0) {
    대체하기();
  }
}

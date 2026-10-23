/* common.js : 모든 페이지 공통 기능 - 모바일 메뉴 항목을 누르면 패널 닫기
   (메뉴 열고 닫기 자체는 체크박스 + CSS로 동작하므로 JS는 닫기만 담당) */

const 메뉴체크박스 = document.getElementById("menu-toggle");

// 메뉴 체크박스가 있는 페이지에서만 실행!
if (메뉴체크박스) {
  document.querySelectorAll(".menu-list a").forEach(function (a) {
    a.addEventListener("click", function () {
      메뉴체크박스.checked = false;
    });
  });
}

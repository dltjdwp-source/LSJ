/**
 * 1. 테마 토글 시스템
 */
const themeToggle = document.getElementById('theme-toggle');
const modeIcon = themeToggle.querySelector('.mode-icon');
const htmlElement = document.documentElement;

// 초기 테마 설정 함수
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 로컬스토리지에 값이 있으면 우선 적용, 없으면 시스템 설정 적용
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
}

// 테마 변경 실행 함수
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 아이콘 변경
    modeIcon.textContent = (theme === 'dark') ? '☀️' : '🌙';
}

// 버튼 클릭 이벤트
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// 초기 실행
initTheme();


/**
 * 2. Swiper 배너 로직 (기존 유지)
 */
const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
});

let restartTimer;

swiper.on('touchStart', function () {
    swiper.autoplay.stop();
    clearTimeout(restartTimer);
});

swiper.on('touchEnd', function () {
    restartTimer = setTimeout(() => {
        swiper.autoplay.start();
    }, 5000);
});

// 페이지네이션 클릭 시에도 5초 대기 후 재시작
document.querySelector('.swiper-pagination').addEventListener('click', function() {
    swiper.autoplay.stop();
    clearTimeout(restartTimer);
    restartTimer = setTimeout(() => {
        swiper.autoplay.start();
    }, 5000);
});
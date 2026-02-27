document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo"); // ロゴ要素を取得
    let isScrolling; // スクロール中かどうかを管理

    // スクロールイベントを監視
    window.addEventListener("scroll", () => {
        logo.classList.add("hidden"); // スクロール中はロゴを非表示

        // スクロールが止まったら一定時間後に再表示
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            logo.classList.remove("hidden"); // 非表示解除
        }, 500); // 500ms（0.5秒）後に再表示
    });
});

//document.addEventListener("DOMContentLoaded", () => {
    //const menuToggle = document.querySelector(".menu-toggle");
    //const navList = document.querySelector(".nav-list");

    //menuToggle.addEventListener("click", () => {
        //navList.classList.toggle("active"); // メニューの表示・非表示を切り替え
    //});
//});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    // メニューの初期状態を非表示に設定
    navList.classList.remove("active");

    // ハンバーガーメニューボタンのクリックイベント
    menuToggle.addEventListener("click", () => {
        if (navList.classList.contains("active")) {
            navList.classList.remove("active"); // 非表示に切り替え
        } else {
            navList.classList.add("active"); // 表示に切り替え
        }
    });
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true, // スライダーをループ
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            allowTouchMove: false, // スワイプ無効
        },
    },
});

// 画面サイズ変更時にSwiperの有効化/無効化を切り替え
function handleResize() {
    if (window.innerWidth >= 768) {
        swiper.disable(); // 768px以上でスライダー無効化
    } else {
        swiper.enable(); // 768px未満でスライダー有効化
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // 初回実行

document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
    button.style.color = 'black'; // インラインスタイルとして色を適用
});



  




  

  

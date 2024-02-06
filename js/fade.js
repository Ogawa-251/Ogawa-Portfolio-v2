let els = document.querySelectorAll('.js-fadeIn');

els.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  function checkPosition() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    // 要素が画面内にあり、かつ上から下にスクロールした場合
    if (offset > 0 && scroll > offset - windowHeight + 250 && offset < windowHeight) {
      fadeIn.classList.add('is-scrollIn');
    }
  }

  // 最初のチェック
  checkPosition();

  // スクロールイベントリスナー
  window.addEventListener('scroll', checkPosition);
});
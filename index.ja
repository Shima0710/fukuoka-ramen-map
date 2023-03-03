
/*sucroll motion*/
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}
/*/sucroll motion*/  

function delayScrollAnime() {
var time = 0.2;//遅延時間を増やす秒数の値
var value = time;
$('.delayScroll').each(function () {
  var parent = this;					//親要素を取得
  var elemPos = $(this).offset().top;//要素の位置まで来たら
  var scroll = $(window).scrollTop();//スクロール値を取得
  var windowHeight = $(window).height();//画面の高さを取得
  var childs = $(this).children();	//子要素を取得
  
  if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
    $(childs).each(function () {
      
      if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
        
        $(parent).addClass("play");	//親要素にクラス名playを追加
        $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
        $(this).addClass("fadeUp");//アニメーションのクラス名を追加
        value = value + time;//delay時間を増加させる
        
        //全ての処理を終わったらplayを外す
        var index = $(childs).index(this);
        if((childs.length-1) == index){
          $(parent).removeClass("play");
        }
      }
    })
  }else {
    $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
    value = time;//delay初期値の数値に戻す
  }
})
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});

    


  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 5,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });


  $(document).ready(() => {
    $(".slick").slick({
      infinite: true, // ループの有効化
      dots: true, // ドットインジケーターの表示
    });
  });
 

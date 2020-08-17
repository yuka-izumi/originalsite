
  $(function () {

    // scrollイベントを取得した際の処理を定義
    $(window).on("scroll", function () {
      // scrollTop()が0より大きい場合
      if ($(this).scrollTop() > 0) {
        // ヘッダーバーをslideDownして表示
        $(".navbar").addClass("bg-dark");
      // scrollTop()が0の場合
      } else {
        // ヘッダーバーをslideUpして非表示
        $(".navbar").removeClass("bg-dark");
      }
    });
  
  });
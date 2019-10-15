$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView : 3,
    centeredSlides : true,
    slidesOffsetBefore : -400,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    // 当所有的内嵌图像（img标签）加载完成后Swiper不会重新初始化
    updateOnImagesReady : false,
  });
  // 轮播图图片数组
  var imgSrcArray = [];

  // 数量
  var slides = $("#teacher .swiper-slide");
  var swiperPaginationSpan = $('#teacher .swiper-pagination span');
  slides.each(function (index) {
    // 填充数据
    imgSrcArray.push($(this).find('img')[0].src);
    // 往指示器添加图片
    $(swiperPaginationSpan[index])
      .html('<img src='+ imgSrcArray[index] +'>');
  });
});





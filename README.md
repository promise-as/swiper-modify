## `swiper`修改

- 可能会出现的`bug`，就是 指示器 的 图片 加载不出来

- 原因有以下几点

  1. 当所有的内嵌图像（`img`标签）加载完成后`Swiper`会重新初始化
  
     ```js
     updateOnImagesReady : false, // 让其不会重新初始化
     ```
  
  2. 因为`swiper`轮播图的指示器是动态生成的，所以 一初始化 指示器 里面就没有添加到图片
  
     ```js
     slides.each(function (index) {
         // 填充数据
         imgSrcArray.push($(this).find('img')[0].src);
         // 往指示器添加图片
         $(swiperPaginationSpan[index])
           .html('<img src='+ imgSrcArray[index] +'>');
       });
     ```
  
  3. 就相当于没有执行到 2 中 往指示器添加图片
// 高性能javascript 读书笔记
// date:2016-07-02 16:06 Saturday
// author:Gogoson

1、最小化重排和重绘
   1）改变多个样式时，合并处理，例如
      var el = document.getElementById('mydiv');
      el.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;';
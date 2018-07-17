// (function(){})()
// (function(){}())
// (立刻执行函数)后面的括号为立即掉调用，前面的括号为：函数表达式的形式声明函数
// (function (doc, win) {
//   // 返回一个文档元素 也就是dom对象；
//   let docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       let clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       if (parseInt(docEl.style.fontSize) < 100) {
//         docEl.style.fontSize = (clientWidth / 10) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
//       } else {
//         docEl.style.fontSize = '100px';
//       }
//       //docEl.style.fontSize = 32 * (clientWidth / 320) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
//     };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
!function(t){var e={};function n(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return t[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(l,o,function(e){return t[e]}.bind(null,o));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./public/js",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),function(t){const e="gallery-one-preview",n="b-preview_active";var l=document.querySelectorAll("["+e+"]"),o=document.querySelectorAll("[gallery-one-stage]");function c(t){var c=t.getAttribute("data-index"),r=t.getAttribute(e);!function(t,e){[].forEach.call(t,function(t,l){l==e&&t.classList.contains(n)||(l==e?t.classList.add(n):t.classList.contains(n)&&t.classList.remove(n))})}(l,c),[].forEach.call(o,function(t,e){e==c?t.classList.add(r):t.classList.contains(r)&&t.classList.remove(r)})}0!==l.length&&function(e){[].forEach.call(e,function(e,l){e.onclick=function(t){c(e)},e.classList.contains(n)?e.click():l==t&&e.click()})}(l)}(0),function(){const t="gallery-two-url";var e=document.querySelectorAll("[gallery-two-link]"),n=document.querySelectorAll("[gallery-two-popup]")[0],l=document.querySelectorAll("[gallery-two-popup-padd]")[0],o=document.querySelectorAll("[gallery-two-popup-content]")[0],c=document.querySelectorAll("[gallery-two-popup-close]")[0],r="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png";function i(){o.innerHTML="",n.style.display="none"}0!==e.length&&([].forEach.call(e,function(e,c){e.onclick=function(c){!function(e){var c="";let i=!1;var a=e.getAttribute(t),u=""!==a?a:r;c=(i=function(t){let e=t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!e&&e[1]}(u))?'<iframe id="content"  width="100%" height="100%" src="https://www.youtube.com/embed/'+i+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="content" width="100%"  height="100%" src="'+u+'"></img>',l.style.width="100%",l.style.height="100%",l.style.margin="0 auto",setTimeout(function(t){o.innerHTML=t,n.style.display="flex";var e=.5625*(t=document.getElementById("content")).clientWidth;t.style.height=e+"px"}(c),100)}(e)}}),c.onclick=function(t){i()},n.onclick=function(t){i()})}(),function(){const t="gallery-three-url";var e=document.querySelectorAll("[gallery-three-link]"),n=document.querySelectorAll("[gallery-three-popup]")[0],l=document.querySelectorAll("[gallery-three-popup-padd]")[0],o=document.querySelectorAll("[gallery-three-popup-content]")[0],c=document.querySelectorAll("[gallery-three-popup-close]")[0],r="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png";function i(){o.innerHTML="",n.style.display="none"}0!==e.length&&([].forEach.call(e,function(e,c){e.onclick=function(c){!function(e){var c="";let i=!1;var a=e.getAttribute(t),u=""!==a?a:r;c=(i=function(t){let e=t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!e&&e[1]}(u))?'<iframe id="contentGalleryThreePopup"  width="100%" height="100%" src="https://www.youtube.com/embed/'+i+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="contentGalleryThreePopup" width="100%"  height="100%" src="'+u+'"></img>',l.style.width="100%",l.style.height="100%",l.style.margin="0 auto",setTimeout(function(t){o.innerHTML=t,n.style.display="flex";var e=.5625*(t=document.getElementById("contentGalleryThreePopup")).clientWidth;t.style.height=e+"px"}(c),500)}(e)}}),c.onclick=function(t){i()},n.onclick=function(t){i()})}(),function(){for(var t=document.querySelectorAll("[tabs-link]"),e=document.querySelectorAll("[tabs-content]"),n=0;n<t.length;n++)!function(n){var l=t[n];l.onclick=function(){for(var o=0;o<t.length;o++){var c=t[o];o!=n&&c.classList.remove("b-system-platforms__item_active")}l.classList.toggle("b-system-platforms__item_active");for(var r=0;r<e.length;r++)"block"==window.getComputedStyle(e[r]).display&&(e[r].style.display="none");e[n].style.display="block"}}(n)}(),function(t){const e="product-extend-preview",n="b-products-list__item_active";var l=document.querySelectorAll("["+e+"]"),o=document.querySelectorAll("[product-extend-stage]");function c(t){var c=t.getAttribute("data-index"),r=t.getAttribute(e);!function(t,e){[].forEach.call(t,function(t,l){l==e&&t.classList.contains(n)||(l==e?t.classList.add(n):t.classList.contains(n)&&t.classList.remove(n))})}(l,c),[].forEach.call(o,function(t,e){e==c?t.classList.add(r):t.classList.contains(r)&&t.classList.remove(r)})}0!==l.length&&function(e){[].forEach.call(e,function(e,l){e.onclick=function(t){c(e)},e.classList.contains(n)?e.click():l==t&&e.click()})}(l)}(0)}]);
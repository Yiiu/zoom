!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.zoom=e()}(this,function(){"use strict";function t(t,e){var n=t.style;return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}function e(t){var e=document.createElement("div");e.innerHTML=t;var n=[],i=!0,s=!1,o=void 0;try{for(var r,a=e.childNodes[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var l=r.value;1===l.nodeType&&n.push(l)}}catch(t){s=!0,o=t}finally{try{!i&&a.return&&a.return()}finally{if(s)throw o}}return n.length>1?n:n[0]}function n(t){return Math.min(window.innerHeight/t.height,document.body.offsetWidth/t.width)}var i={defaultSelector:"img[data-action=zoom]"},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function e(t){s(this,e),this.event=t,this.init()}return o(e,[{key:"init",value:function(){}},{key:"style",value:function(e){return t(this.event,e),this}},{key:"scale",value:function(){return n(this.event.getBoundingClientRect())}},{key:"offset",value:function(){var t=this.event.getBoundingClientRect();return{y:-(t.width/2-(document.body.scrollWidth/2-t.left)),x:-((t.height-t.height*this.scale())/2+t.top)}}}]),e}(),a={html:'\n        <div class="mask"></div>\n    '},l=function(){function n(t,i){s(this,n),this.options=t,this.instance=i,this.el=e(a.html),this.parent=document.body,this.init()}return o(n,[{key:"init",value:function(){t(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,zindex:233,background:"rgba(255, 255, 255, 0.4)",transition:"0.4s cubic-bezier(0.4, 0, 0, 1)"})}},{key:"insert",value:function(){this.parent.appendChild(this.el)}},{key:"show",value:function(){var t=this;setTimeout(function(){return t.el.style.opacity=1},30)}},{key:"hide",value:function(){this.el.style.opacity=0}},{key:"remove",value:function(){this.parent.removeChild(this.el)}}]),n}();return function(){function t(e){var n=this;s(this,t),this.body=document.body,this.el="string"==typeof e.el?document.querySelector(e.el):e.el,this.imgs=[],this.style={},this.instance={options:{},event:null},this.lock=!1,this.shown=!1,this.Mask=new l,Object.keys(i).forEach(function(t){return n[t]=e[t]||i[t]}),this.init()}return o(t,[{key:"init",value:function(){this.imgs=this.el.querySelectorAll(this.defaultSelector),this.listen(this.imgs)}},{key:"listen",value:function(t){var e=this;return t.forEach(function(t){t.addEventListener("click",e.handleClick.bind(e))}),document.addEventListener("scroll",this.close.bind(this)),this}},{key:"handleClick",value:function(){this.shown?this.close():this.open(event.target)}},{key:"open",value:function(t){var e=this;if(this.lock||this.shown)return this;var n=this.instance.event=new r(t);n.style({position:"relative",transform:"translate3d("+n.offset().y+"px, "+n.offset().x+"px, 0) scale3d("+n.scale()+", "+n.scale()+", 1)",transition:"0.4s cubic-bezier(0.4, 0, 0, 1)",zIndex:2333}),this.lock=!0,this.shown=!0,this.Mask.insert(),this.Mask.show();var i=function t(){n.event.removeEventListener("transitionend",t),e.lock=!1};n.event.addEventListener("transitionend",i)}},{key:"close",value:function(){var t=this;if(this.lock||!this.shown)return this;var e=this.instance.event;this.Mask.hide(),e.style({transform:"translate3d(0, 0, 0) scale3d(1, 1, 1)"}),this.lock=!0,this.shown=!1;var n=function n(){e.event.removeEventListener("transitionend",n),t.lock=!1,t.Mask.remove(),e.style({position:"relative",zIndex:""})};e.event.addEventListener("transitionend",n)}}]),t}()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc3R5bGVzLmpzIiwiLi4vLi4vc3JjL2xpYi9kb20uanMiLCIuLi8uLi9zcmMvY29uZmlnLmpzIiwiLi4vLi4vc3JjL2ltZy5qcyIsIi4uLy4uL3NyYy9tYXNrLmpzIiwiLi4vLi4vc3JjL3pvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlIChlbCwgc3R5bGVPYmopIHtcclxuICAgIGxldCBzdHlsZXMgPSBlbC5zdHlsZVxyXG4gICAgT2JqZWN0LmtleXMoc3R5bGVPYmopLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBzdHlsZXNba2V5XSA9IHN0eWxlT2JqW2tleV1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHN0eWxlc1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRG9tKGFyZykgeyBcclxuICAgIGxldCBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZG9tLmlubmVySFRNTCA9IGFyZ1xyXG4gICAgbGV0IGNoaWxkID0gW11cclxuICAgIGZvciAobGV0IGkgb2YgZG9tLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICBpZiAoaS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBjaGlsZC5wdXNoKGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoaWxkLmxlbmd0aCA+IDEgPyBjaGlsZCA6IGNoaWxkWzBdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTY2FsZSAocmVzdCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAvIHJlc3QuaGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC8gcmVzdC53aWR0aClcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRlZmF1bHRTZWxlY3RvcjogJ2ltZ1tkYXRhLWFjdGlvbj16b29tXSdcclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHl1ZXIgb24gMjAxNy81LzQuXHJcbiAqL1xyXG5pbXBvcnQgeyBzZXRTdHlsZSB9IGZyb20gJy4vbGliL3N0eWxlcydcclxuaW1wb3J0IHsgc2V0U2NhbGUgfSBmcm9tICcuL2xpYi9kb20nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWdzIHtcclxuICAgIGNvbnN0cnVjdG9yIChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBldmVudFxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBpbml0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGUgKHN0eWxlKSB7XHJcbiAgICAgICAgc2V0U3R5bGUodGhpcy5ldmVudCwgc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHNjYWxlICgpIHtcclxuICAgICAgICByZXR1cm4gc2V0U2NhbGUodGhpcy5ldmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgIH1cclxuICAgIG9mZnNldCAoKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmV2ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSAocmVjdC53aWR0aCAvIDIpIC0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLyAyIC0gcmVjdC5sZWZ0KVxyXG4gICAgICAgIGxldCBvZmZzZXRYID0gKHJlY3QuaGVpZ2h0IC0gKHJlY3QuaGVpZ2h0ICogdGhpcy5zY2FsZSgpKSkgLyAyICsgcmVjdC50b3BcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB5OiAtb2Zmc2V0WSxcclxuICAgICAgICAgICAgeDogLW9mZnNldFhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSB5dWVyIG9uIDIwMTcvNS80LlxyXG4gKi9cclxuaW1wb3J0IHsgcGFyc2VEb20gfSBmcm9tICcuL2xpYi9kb20nXHJcbmltcG9ydCB7IHNldFN0eWxlIH0gZnJvbSAnLi9saWIvc3R5bGVzJ1xyXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgaHRtbDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICBgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayB7XHJcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucywgaW5zdGFuY2UpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5lbCA9IHBhcnNlRG9tKGRlZmF1bHRDb25maWcuaHRtbClcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LmJvZHlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgc2V0U3R5bGUodGhpcy5lbCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICB6aW5kZXg6IDIzMyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAsIDEpJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaW5zZXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKVxyXG4gICAgfVxyXG4gICAgc2hvdyAoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsLnN0eWxlLm9wYWNpdHkgPSAxLCAzMClcclxuICAgIH1cclxuICAgIGhpZGUgICgpIHtcclxuICAgICAgICB0aGlzLmVsLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcbiAgICByZW1vdmUgKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWwpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZGVmYXVsdE9wdGlvbiBmcm9tICcuL2NvbmZpZydcbmltcG9ydCBJbWdzIGZyb20gJy4vaW1nJ1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9tYXNrJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgICAgICB0aGlzLmVsID0gdHlwZW9mIG9wdGlvbnMuZWwgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsKSA6IG9wdGlvbnMuZWxcbiAgICAgICAgdGhpcy5pbWdzID0gW11cbiAgICAgICAgdGhpcy5zdHlsZSA9IHt9XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgICAgIGV2ZW50OiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NrID0gZmFsc2UgICAvLyDov4fmuKHml7bkuI3lhYHorrjmk43kvZxcbiAgICAgICAgdGhpcy5zaG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMuTWFzayA9IG5ldyBNYXNrKClcbiAgICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdE9wdGlvbikuZm9yRWFjaCh0eXBlID0+IHRoaXNbdHlwZV0gPSBvcHRpb25zW3R5cGVdIHx8IGRlZmF1bHRPcHRpb25bdHlwZV0pXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIGluaXQgKCkge1xuICAgICAgICB0aGlzLmltZ3MgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5kZWZhdWx0U2VsZWN0b3IpXG4gICAgICAgIHRoaXMubGlzdGVuKHRoaXMuaW1ncylcbiAgICB9XG4gICAgLyoqXG4gICAgICog57uR5a6aZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGVsXG4gICAgICogQHJldHVybnMge1pvb219XG4gICAgICovXG4gICAgbGlzdGVuIChlbCkge1xuICAgICAgICBlbC5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayAoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG93bikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKGV2ZW50LnRhcmdldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omT5byAXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtab29tfVxuICAgICAqL1xuICAgIG9wZW4gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2sgfHwgdGhpcy5zaG93bikgcmV0dXJuIHRoaXNcbiAgICAgICAgbGV0IGltZyA9IHRoaXMuaW5zdGFuY2UuZXZlbnQgPSBuZXcgSW1ncyhldmVudClcbiAgICAgICAgaW1nLnN0eWxlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtpbWcub2Zmc2V0KCkueX1weCwgJHtpbWcub2Zmc2V0KCkueH1weCwgMCkgc2NhbGUzZCgke2ltZy5zY2FsZSgpfSwgJHtpbWcuc2NhbGUoKX0sIDEpYCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgIHpJbmRleDogMjMzM1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxvY2sgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hvd24gPSB0cnVlXG4gICAgICAgIHRoaXMuTWFzay5pbnNlcnQoKVxuICAgICAgICB0aGlzLk1hc2suc2hvdygpXG4gICAgICAgIGxldCBFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbWcuZXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIEVuZClcbiAgICAgICAgICAgIHRoaXMubG9jayA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBFbmQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YWz6ZetXG4gICAgICovXG4gICAgY2xvc2UgKCkge1xuICAgICAgICBpZiAodGhpcy5sb2NrIHx8ICF0aGlzLnNob3duKSByZXR1cm4gdGhpc1xuICAgICAgICBsZXQgaW1nID0gdGhpcy5pbnN0YW5jZS5ldmVudFxuICAgICAgICB0aGlzLk1hc2suaGlkZSgpXG4gICAgICAgIGltZy5zdHlsZSh7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZTNkKDEsIDEsIDEpYFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxvY2sgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZVxuICAgICAgICBsZXQgRW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgaW1nLmV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBFbmQpXG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5NYXNrLnJlbW92ZSgpXG4gICAgICAgICAgICBpbWcuc3R5bGUoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBFbmQpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJzZXRTdHlsZSIsImVsIiwic3R5bGVPYmoiLCJzdHlsZXMiLCJzdHlsZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicGFyc2VEb20iLCJhcmciLCJkb20iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZCIsImNoaWxkTm9kZXMiLCJpIiwibm9kZVR5cGUiLCJwdXNoIiwibGVuZ3RoIiwic2V0U2NhbGUiLCJyZXN0IiwiTWF0aCIsIm1pbiIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaGVpZ2h0IiwiYm9keSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJpbWdzIiwiZXZlbnQiLCJpbml0IiwidGhpcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxXaWR0aCIsImxlZnQiLCJzY2FsZSIsInRvcCIsImRlZmF1bHRDb25maWciLCJNYXNrIiwib3B0aW9ucyIsImluc3RhbmNlIiwiaHRtbCIsInBhcmVudCIsImFwcGVuZENoaWxkIiwiX3RoaXMiLCJvcGFjaXR5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwibG9jayIsInNob3duIiwiZGVmYXVsdE9wdGlvbiIsInR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVmYXVsdFNlbGVjdG9yIiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzMiIsImhhbmRsZUNsaWNrIiwiYmluZCIsImNsb3NlIiwib3BlbiIsInRhcmdldCIsImltZyIsIkltZ3MiLCJvZmZzZXQiLCJ5IiwieCIsImluc2VydCIsInNob3ciLCJFbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IitLQUFPLFNBQVNBLEdBQVVDLEVBQUlDLE1BQ3RCQyxHQUFTRixFQUFHRyxvQkFDVEMsS0FBS0gsR0FBVUksUUFBUSxjQUNuQkMsR0FBT0wsRUFBU0ssS0FHcEJKLEVDTkosUUFBU0ssR0FBU0MsTUFDakJDLEdBQU1DLFNBQVNDLGNBQWMsU0FDN0JDLFVBQVlKLEtBQ1pLLHlDQUNVSixFQUFJSywwREFBWSxJQUFyQkMsVUFDYyxLQUFmQSxFQUFFQyxZQUNJQyxLQUFLRix1RkFHWkYsR0FBTUssT0FBUyxFQUFJTCxFQUFRQSxFQUFNLEdBRzVDLFFBQWdCTSxHQUFVQyxTQUNmQyxNQUFLQyxJQUFJQyxPQUFPQyxZQUFjSixFQUFLSyxPQUFRZixTQUFTZ0IsS0FBS0MsWUFBY1AsRUFBS1EsT0NidkYsdUJBQ3FCLDZXQ0tBQyx3QkFDSkMsa0JBQ0pBLE1BQVFBLE9BQ1JDLCtFQVdGNUIsWUFDTTZCLEtBQUtGLE1BQU8zQixHQUNkNkIsMkNBR0FiLEdBQVNhLEtBQUtGLE1BQU1HLDZEQUd2QkMsR0FBT0YsS0FBS0YsTUFBTUcsbUNBQ1BDLEVBQUtOLE1BQVEsR0FBTWxCLFNBQVNnQixLQUFLUyxZQUFjLEVBQUlELEVBQUtFLFlBQ3hERixFQUFLVCxPQUFVUyxFQUFLVCxPQUFTTyxLQUFLSyxTQUFZLEVBQUlILEVBQUtJLGVDekJ4RUMsb0RBS2VDLHdCQUNKQyxFQUFTQyxrQkFDYkQsUUFBVUEsT0FDVkMsU0FBV0EsT0FDWDFDLEdBQUtPLEVBQVNnQyxFQUFjSSxXQUM1QkMsT0FBU2xDLFNBQVNnQixVQUNsQkssa0RBR0lDLEtBQUtoQyxhQUNBLFlBQ0wsT0FDQyxRQUNDLFNBQ0MsU0FDQSxlQUNJLHNDQUNBLDBFQUlYNEMsT0FBT0MsWUFBWWIsS0FBS2hDLHlEQUdsQixpQkFBTThDLEdBQUs5QyxHQUFHRyxNQUFNNEMsUUFBVSxHQUFHLHdDQUd2Qy9DLEdBQUdHLE1BQU00QyxRQUFVLHdDQUduQkgsT0FBT0ksWUFBWWhCLEtBQUtoQywwQ0NwQ3BCeUMsNkJBQ0pmLEtBQU9oQixTQUFTZ0IsVUFDaEIxQixHQUEyQixnQkFBZnlDLEdBQVF6QyxHQUFrQlUsU0FBU3VDLGNBQWNSLEVBQVF6QyxJQUFNeUMsRUFBUXpDLFFBQ25GNkIsYUFDQTFCLGNBQ0F1QywyQkFFTSxXQUVOUSxNQUFPLE9BQ1BDLE9BQVEsT0FDUlgsS0FBTyxHQUFJQSxVQUNUcEMsS0FBS2dELEdBQWUvQyxRQUFRLGtCQUFReUMsR0FBS08sR0FBUVosRUFBUVksSUFBU0QsRUFBY0MsVUFDbEZ0QixxREFHQUYsS0FBT0csS0FBS2hDLEdBQUdzRCxpQkFBaUJ0QixLQUFLdUIsc0JBQ3JDQyxPQUFPeEIsS0FBS0gscUNBUWI3Qix1QkFDREssUUFBUSxjQUNEb0QsaUJBQWlCLFFBQVNDLEVBQUtDLFlBQVlDLG9CQUU1Q0gsaUJBQWlCLFNBQVV6QixLQUFLNkIsTUFBTUQsS0FBSzVCLE9BRTdDQSwyQ0FJRkEsS0FBS21CLFdBR0RVLGFBRkFDLEtBQUtoQyxNQUFNaUMscUNBWWxCakMsaUJBQ0VFLEtBQUtrQixNQUFRbEIsS0FBS21CLE1BQU8sTUFBT25CLFNBQ2hDZ0MsR0FBTWhDLEtBQUtVLFNBQVNaLE1BQVEsR0FBSW1DLEdBQUtuQyxLQUNyQzNCLGdCQUNVLG9DQUNnQjZELEVBQUlFLFNBQVNDLFNBQVFILEVBQUlFLFNBQVNFLG9CQUFtQkosRUFBSTNCLGFBQVkyQixFQUFJM0IsMEJBQ3ZGLHlDQUNKLFlBRVBhLE1BQU8sT0FDUEMsT0FBUSxPQUNSWCxLQUFLNkIsY0FDTDdCLEtBQUs4QixVQUNOQyxHQUFNLFFBQU5BLE9BQ0l6QyxNQUFNMEMsb0JBQW9CLGdCQUFpQkQsS0FDMUNyQixNQUFPLEtBRVpwQixNQUFNMkIsaUJBQWlCLGdCQUFpQmMsaURBT3hDdkMsS0FBS2tCLE9BQVNsQixLQUFLbUIsTUFBTyxNQUFPbkIsU0FDakNnQyxHQUFNaEMsS0FBS1UsU0FBU1osV0FDbkJVLEtBQUtpQyxTQUNOdEUsZ0VBR0MrQyxNQUFPLE9BQ1BDLE9BQVEsS0FDVG9CLEdBQU0sUUFBTkEsT0FDSXpDLE1BQU0wQyxvQkFBb0IsZ0JBQWlCRCxLQUMxQ3JCLE1BQU8sSUFDUFYsS0FBS2tDLFdBQ052RSxnQkFDVSxrQkFDRixRQUdaMkIsTUFBTTJCLGlCQUFpQixnQkFBaUJjIn0=
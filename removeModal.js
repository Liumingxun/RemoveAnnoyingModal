// ==UserScript==
// @name         移除烦人的弹出层
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  移除烦人的弹出层
// @author       Luoming
// @match        *://www.zhihu.com/*
// @icon         <$ICON$>
// @run-at       document-idle
// @grant        GM_log
// ==/UserScript==

(function () {
    'use strict';
    // document.querySelector("body > div:nth-child(13) > div > div > div")
    window.onload = function () {
        const modal = document.querySelector("body > div:nth-child(13) > div > div > div")
        GM_log('Luoming 2333')
        modal.parentNode.removeChild(modal)
        document.querySelector('html').style.overflow = "scroll"
    }
})();
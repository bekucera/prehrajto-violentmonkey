// ==UserScript==
// @name        prehrajto
// @namespace   Violentmonkey Scripts
// @match       *://prehraj.to/*
// @grant       none
// @version     1.0
// @author      -
// @description 5/10/2024, 10:46:53 AM
// ==/UserScript==

window.addEventListener('load', function () {
    h1 = document.getElementsByTagName("h1")[0];
    buttons = "";
    sources.videos.map((item) => {
        buttons += `<a src="${item.src}">${item.res}</a><br>`;
    });
    h1.innerHTML = `${h1.innerHTML}<br/>${buttons}`;
    console.log();
}, false);
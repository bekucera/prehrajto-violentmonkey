// ==UserScript==
// @name        prehrajto
// @namespace   Violentmonkey Scripts
// @match       *://prehraj.to/*
// @match       *://prehrajto.cz/*
// @grant       none
// @version     1.0
// @author      bekucera
// @description 5/10/2024, 10:46:53 AM
// ==/UserScript==

if (typeof sources !== 'undefined') {
    h1 = document.getElementsByTagName("h1")[0];
    buttons = "";
    sources.videos.map((item) => {
        buttons += `<a href="${item.src}">${item.res}p</a><br>`;
    });
    h1.innerHTML = `${h1.innerHTML}<br/>${buttons}`;
}
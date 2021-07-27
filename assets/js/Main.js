"use strict";
var config_base_url = '//' + window.location.host + '/api';
var config_locale = 'fr_FR';
let MyDataz = Object;
let ChatBot = Object;
let Curriculum = Object;
window.addEventListener('load', () => {
	Curriculum = new Editing();
	MyDataz = new MyLocalStorage();
	document.onkeydown = (eventkeydown) => {
		if (eventkeydown.key === "Enter") { MyDataz.checkEnterKey() }
	};
}, false)

// for (let i = 1; i < 30; i++) {
// 	console.log(i % 5 * 50)
// }

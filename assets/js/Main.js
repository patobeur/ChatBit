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

	document.addEventListener("scroll", (e) => {
		let navigation = document.getElementById("navigation")
		if (window.pageYOffset > 20) {
			if (!navigation.classList.contains('fixedtop')) {
				navigation.classList.add('fixedtop')
			}
		}
		else if (navigation.classList.contains('fixedtop')) {
			navigation.classList.remove('fixedtop')
		}
	})
}, false)

// for (let i = 1; i < 30; i++) {
// 	console.log(i % 5 * 50)
// }

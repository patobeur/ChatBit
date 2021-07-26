"use strict";
class MyLocalStorage extends ChatBit {
	constructor() {
		super();
		// local Datas
		this.password = 'patobeur'
		this.mydataz = localStorage
		// Class From Beyond ???
		this.ChatBot = new ChatBit();
		// store current bot question
		this.botQuestion = { id: false, name: false, sentence: false }
		// --
		this.password = 'patobeur'
		// first comming ?
		this.is_known()

	}
	// // base actions
	// get_StorageItem(itemname) { return (localStorage.itemname) ? localStorage.getItem(itemname) : false }
	// remove_StorageItem(itemname) { return localStorage.itemname ? localStorage.removeItem(itemname) : false }
	// set_StorageItem(itemname, data) { localStorage.setItem(itemname, data) }
	// clear_Storage() { localStorage.clear(); }
	// ---

	is_known() {
		let mls_user = localStorage.getItem('mls_user')
		if (mls_user) {
			// console.log('welcome back ! ' + mls_user)
			this.ChatBot.add_message('welcome back ! ' + mls_user, 'text')
		} else {
			localStorage.setItem('mls_user', this.password)
			// console.log('need profil creation ! ')
			this.ChatBot.add_message('New around ?', 'text')
			this.ChatBot.add_message('Let store some data like a arbitrary Name !', 'text')
			this.ChatBot.add_message('what is your name ?', 'text')
			this.botQuestion = { id: 1, name: 'name', sentence: ff + ' is your name ? (y/n)' }
		}
	}
	redirect_add_message(content, type, who, uid) {
		this.ChatBot.add_message(content, type, who, uid)
		if (this.botQuestion.name && this.botQuestion.sentence) {
			this.ChatBot.add_message(this.botQuestion.sentence, 'text')
		}
	}
}
function get_emptyJson() {
	let json = {
		0: {
			gender: '',
			name: '',
			surname: '',
			adress: '',
			zip: '',
			city: '',
			mail: '',
			phone: ''
		}
	}
}

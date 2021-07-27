"use strict";
class MyLocalStorage extends ChatBit {
	constructor() {
		super();

		// local Datas
		// this.mydataz = localStorage

		// Class From Beyond ???
		// this.ChatBot = new ChatBit();

		// store current bot question
		this.botQuestionsStack = { id: false, name: false, sentence: false }
		// tempo datas
		this.temporaryName = 'patobeur'

		// check if first comming ?
		this.is_known()

	}
	// // base actions
	// get_StorageItem=(itemname) => { return (localStorage.itemname) ? localStorage.getItem(itemname) : false }
	// remove_StorageItem=(itemname) => { return localStorage.itemname ? localStorage.removeItem(itemname) : false }
	// set_StorageItem=(itemname, data) => { localStorage.setItem(itemname, data) }
	redirect_clear_Storage = () => { console.log('clear_Storage'); localStorage.clear(); }
	// ---

	regex_input = (value) => { return value.replaceAll(/[&/\\#,+()$~%.^'":*?<>{}]/g, "*"); }
	// ---

	is_known = () => {
		let mls_user = localStorage.getItem('mls_user')
		if (mls_user) {
			// console.log('welcome back ! ' + mls_user)
			this.add_message('welcome back ! ' + mls_user, 'text')
		} else {

			localStorage.setItem('mls_user', this.temporaryName)
			// console.log('need profil creation ! ')
			this.add_message('New around ? what is your name ?', 'text')
			this.botQuestionsStack = { id: 1, name: 'name', sentence: ' is your name ? (y/n)' }
		}
	}
	reroot_add_message = (content, type, who, uid) => {
		content = this.regex_input(content)
		this.add_message(content, type, who, uid)


		// check respons correlation
		if (this.botQuestionsStack.name && this.botQuestionsStack.sentence) {
			this.add_message(content + ", " + this.botQuestionsStack.sentence, 'text')
			this.botQuestionsStack = { id: 2, name: 'name', sentence: ' sorry cant save this right now... Dev is sleeping...' }
		}



	}
}

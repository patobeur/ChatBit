"use strict";
let nbMess = 0;
// -----------------------------
class ChatBit {
	constructor() {
		// local Datas
		this.messages = {
			0: {
				mess: 'Bonjour !',
				type: 'text',
				id: 'Bot',
				time: 0
			}
		}
		// local Datas
		this.chatSize = { num: 0, sizes: ['sm', 'md', 'xl'] };
		// Targets
		this.inputValue = document.getElementById('chatput')
		this.chatDiv = document.getElementById('chat-container')
		this.submitActionDiv = document.getElementById('chatbit')
		this.biggerActionDiv = document.getElementById('bigger')
		this.fixchatActionDiv = document.getElementById('fixchat')
		// Targets Listeners	
		this.submitActionDiv.addEventListener('click', this.checkSend)
		this.biggerActionDiv.addEventListener('click', this.get_biggerChat)
		this.fixchatActionDiv.addEventListener('click', this.get_fixedChat)

	}
	get_fixedChat() {
		let isopen = MyDataz.chatDiv.classList.contains('open')
		if (isopen) {
			MyDataz.chatDiv.classList.remove('open')
		}
		else {
			MyDataz.chatDiv.classList.add('open')
		}
	}
	get_biggerChat() {
		let oldnum = MyDataz.chatSize.num
		let oldSize = MyDataz.chatSize.sizes[oldnum]
		MyDataz.chatSize.num = (MyDataz.chatSize.num < MyDataz.chatSize.sizes.length) ? MyDataz.chatSize.num + 1 : 0
		let newSize = MyDataz.chatSize.sizes[MyDataz.chatSize.num]
		MyDataz.chatDiv.classList.remove(oldSize)
		MyDataz.chatDiv.classList.add(newSize)
	}
	add_message(content, type, who = 'bot', uid = false, sentence = false) {
		let cleancontent = content // need to be cleaned 
		let cleantype = type // need to be cleaned 
		let cleanwho = who // need to be cleaned 
		// ---
		let newcontentDiv = document.createElement('div')
		newcontentDiv.className = cleantype
		newcontentDiv.textContent = '#' + nbMess + ':' + cleancontent
		// ---
		let newmessDiv = document.createElement('div')
		newmessDiv.id = 'mess-' + nbMess
		newmessDiv.className = cleanwho
		newmessDiv.appendChild(newcontentDiv)
		// ---
		let targetDiv = document.getElementById('messages-box')
		targetDiv.prepend(newmessDiv)
		// ---
		document.getElementById('chat-container').classList.add('active')
		// ---
		nbMess++
		setTimeout(this.set_chatOff, 5000, 'test')
	}

	checkSend() {
		let message = MyDataz.inputValue
		if (message.value.length > 0) {
			MyDataz.redirect_add_message(message.value, 'text', 'me')
			message.value = ""
		}
	}
	set_chatOff = (content = "vide") => {
		document.getElementById('chat-container').classList.remove('active')
		//console.log('chatoff:' + content)
	}

}

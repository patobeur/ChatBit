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
		// Targets
		this.inputValue = document.getElementById('chatput')
		this.chatDiv = document.getElementById('chat-container')
		this.submitActionDiv = document.getElementById('chatbit')
		this.biggerActionDiv = document.getElementById('bigger')
		this.fixchatActionDiv = document.getElementById('fixchat')
		// local Datas
		this.chatSize = { num: 0, sizes: ['sm', 'md', 'xl'] };
		// this.chatDiv.classList.add(this.chatSize[this.chatSize.num].sizes)
		// Targets Listeners	
		this.submitActionDiv.addEventListener('click', this.checkSend, false)
		this.biggerActionDiv.addEventListener('click', this.get_biggerChat)
		this.fixchatActionDiv.addEventListener('click', this.get_fixedChat, false)
		this.get_biggerChat()

	}
	get_fixedChat() {
		MyDataz.chatDiv.classList.contains('open') ?
			MyDataz.chatDiv.classList.remove('open') :
			MyDataz.chatDiv.classList.add('open')
		MyDataz.fixchatActionDiv.classList.contains('active') ?
			MyDataz.fixchatActionDiv.classList.remove('active') :
			MyDataz.fixchatActionDiv.classList.add('active')
	}
	get_biggerChat = (eve) => {
		this.chatDiv.classList.remove(this.chatSize.sizes[this.chatSize.num])
		this.chatSize.num = (this.chatSize.num < this.chatSize.sizes.length) ? this.chatSize.num + 1 : 0
		this.chatDiv.classList.add(this.chatSize.sizes[this.chatSize.num])
	}
	add_message(content, type, who = 'bot', uid = false, sentence = false) {
		let cleancontent = content // need to be cleaned 
		let cleantype = type // need to be cleaned 
		let cleanwho = who // need to be cleaned 
		// ---
		let newcontentDiv = document.createElement('div')
		newcontentDiv.className = cleantype
		newcontentDiv.textContent = (who === 'bot' ? '🤖' : '🎓') + nbMess + ':' + cleancontent
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

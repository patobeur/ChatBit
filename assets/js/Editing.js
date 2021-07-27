"use strict";
// -----------------------------
class Editing {
	constructor() {
		// local Datas
		this.actions = {
			'editing': {
				'active': false,
			},
			'trolling': false
		}
		// local Datas
		this.secretPhrase = 'wazaaaaaaaaaaaaaaaa'
		// local Datas
		this.templateCv = this.get_templateCv()
		this.switchdaymode('init')
		this.add_listeners()
		this.add_intro()
	}

	switchdaymode = (first) => {
		let daymode = localStorage.getItem('mls_daymode');
		if (first || daymode === null) {// first time
			daymode = daymode === null ? true : (daymode === 'true' ? true : false)
		} else {// welcome back
			daymode = daymode === 'true' ? false : true
		}
		document.body.className = !daymode ? "nightmode" : "daymode"
		document.getElementById("dayornight").textContent = daymode ? "Switch Dark" : "Switch Ligth"
		localStorage.setItem('mls_daymode', daymode)
	}
	add_listeners = () => {
		document.getElementById('dayornight').addEventListener('click', () => {
			Curriculum.switchdaymode();
		})
	}
	get_datasCv = () => {
		return {
			intro: {
				personalinfo: {
					name: 'Kung-Lee',
					surname: 'Foo',
					gender: 1,
					address: '2bis, Dragon Street',
					zip: '71375',
					city: 'Theorie',
					age: 20,
					birthdate: '2021-12-31 23:59:59',
					mail: 'kunglee@foo.com',
					phone: '(33)123456789',
					temporaryName: 'toto'
				},
				jobname: {
					job: 'Développeur Web & Web Mobile'
				}
			}
		}
	}
	get_templateCv = () => {
		return {
			intro: {
				personalinfo: {
					name: ['div', 'string', 'name', 'Kung-Lee'],
					surname: ['div', 'string', 'surname', 'Foo'],
					gender: ['div', 'integer', 'gender', 1, "0=Miss, 1=Mister"],
					address: ['div', 'string', 'address', "2bis, Dragon's Street"],
					zip: ['div', 'string', 'zip', '71375'],
					city: ['div', 'string', 'city', 'Theorie'],
					age: ['div', 'integer', 'age', 20],
					birthdate: ['div', 'date', 'birthdate', '2021-12-31 23:59:59'],
					mail: ['div', 'mail', 'mail', 'kunglee@foo.com'],
					phone: ['div', 'string', 'phone', '(33)123456789'],
					temporaryName: ['div', 'string', 'temporaryName', 'toto']
				},
				jobname: {
					job: ['h1', 'string', 'job', 'Développeur Web & Web Mobile']
				},
			},
			experiences: {
				title: 'ACTUELLEMENT CHEZ Ying Lu World Corp !',
				blocs: [
					{
						jobname: 'Formateur',
						date: 'Depuis 2006',
						sentence: "'CaskadAvecDuStyle'",
						lines: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget turpis sem.",
							"Curabitur nisi nunc, posuere quis aliquam id, vehicula et leo.",
							"Nullam ultricies ultrices nisi vitae egestas."
						],
						order: 1
					}
				],

				city: 'Theorie',
				mail: 'kunglee@foo.com',
				phone: '(33)123456789',
				temporaryName: 'toto'
			}
		};
	}
	add_intro = () => {
		// intro
		localStorage.setItem('mls_cv', this.encrypteMe(JSON.stringify(this.get_datasCv())));
		let json = JSON.parse(this.decrypteMe(localStorage.getItem('mls_cv')).toString(CryptoJS.enc.Utf8))
	}
	add_div = (tagname = "div", type, id, content) => {
		let div = document.createElement(tagname)
		div.iv = id
		div.iv = id
	}
	encrypteMe = (value) => {
		return CryptoJS.AES.encrypt(value, this.secretPhrase);
	}
	decrypteMe = (encrypted) => {
		return CryptoJS.AES.decrypt(encrypted, this.secretPhrase);
	}
}

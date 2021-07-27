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
		this.templateCv = this.get_templateCv
	}

	get_templateCv = () => {
		return {
			intro: {
				personalinfo: {
					name: 'Kung-Lee',
					surname: 'Foo',
					gender: 1,
					address: "2bis, Dragon's Street",
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
}

const state = {
	contacts: [
		{
			id: 1,
			name: 'Leanne Graham',
			emails: ['Sincere@april.biz'],
			addresses: ['Kulas Light'],
			phones: ['1-770-736-8031 x56442'],
			showCardList: true,
		},
		{
			id: 2,
			name: 'Ervin Howell',
			emails: ['Shanna@melissa.tv'],
			addresses: ['Victor Plains'],
			phones: ['010-692-6593 x09125'],
			showCardList: true,
		},
		{
			id: 3,
			name: 'Clementine Bauch',
			emails: ['Nathan@yesenia.net'],
			addresses: ['Douglas Extension'],
			phones: ['1-463-123-4447'],
			showCardList: true,
		},
	],
	contact: {},
	id: '',
};

const getters = {
	allContacts: state => state.contacts,
	contact: state => state.contact,
};

const actions = {
	// delete contact by id
	deleteContact({ commit }, id) {
		commit('delContact', id);
	},

	// get contact by id
	fetchContact({ commit }, id) {
		commit('setContact', id);
	},

	// add Contact
	addContact({ commit }, contact) {
		commit('addNewContact', contact);
	},

	updateContact({ commit }, contact) {
		commit('updateContact', contact);
	},

	// for email
	addEmail({ commit }, email) {
		commit('pushEmail', email);
	},

	// for phone
	addPhone({ commit }, phone) {
		commit('pushPhone', phone);
	},

	// for location
	addLocation({ commit }, city) {
		commit('pushLocation', city);
	},

	// clear contact
	clearContact({ commit }) {
		commit('clearContact');
	},

	deleteEmail({ commit }, index) {
		commit('delEmail', index);
	},

	deletePhone({ commit }, index) {
		commit('delPhone', index);
	},

	deleteLocation({ commit }, index) {
		commit('delLocation', index);
	},

	// Filter Contacts
	filterContacts({ commit }, term) {
		commit('filtrContacts', term);
	},

	// set loading true
	setLoading({ commit }) {
		commit('setLoadingTrue');
	},

	//setId
	setId({ commit }, id) {
		commit('setId', id);
	},
};

const mutations = {
	setContact: (state, id) => {
		state.contacts.forEach(contact => {
			if (contact.id == id) {
				state.contact = contact;
			}
		});
	},
	delContact: (state, id) => {
		state.contacts = state.contacts.filter(contact => contact.id !== id);
	},
	addNewContact: (state, contact) =>
		(state.contacts = [contact, ...state.contacts]),

	updateContact: (state, updContact) => {
		const index = state.contacts.findIndex(
			contact => contact.id === updContact.id
		);
		if (index !== -1) {
			state.contacts.splice(index, 1, updContact);
		}
	},

	setId: (state, id) => (state.id = id),

	pushEmail: (state, email) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.emails = [...contact.emails, email];
			}
		});
	},

	pushPhone: (state, phone) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.phones = [...contact.phones, phone];
			}
		});
	},

	pushLocation: (state, city) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.addresses = [...contact.addresses, city];
			}
		});
	},

	// Filter
	filtrContacts: (state, term) => {
		const text = term.toString().toLowerCase();

		state.contacts.forEach(contact => {
			if (
				contact.name
					.toString()
					.toLowerCase()
					.includes(text)
			) {
				contact.showCardList = true;
			} else {
				contact.showCardList = false;
			}
		});

		// state.contacts.filter((contact, index) => {
		// 	if (
		// 		contact.name
		// 			.toString()
		// 			.toLowerCase()
		// 			.indexOf(text) === -1
		// 	) {
		// 		state.contacts.splice(index, 1);
		// 	}
		// });
	},

	delEmail: (state, index) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.emails.splice(index, 1);
			}
		});
	},

	delPhone: (state, index) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.phones.splice(index, 1);
			}
		});
	},

	delLocation: (state, index) => {
		state.contacts.forEach(contact => {
			if (contact.id == state.id) {
				contact.addresses.splice(index, 1);
			}
		});
	},

	clearContact: state => (state.contact = {}),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

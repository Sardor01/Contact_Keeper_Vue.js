const state = {
	contacts: [
		{
			id: 1,
			name: 'Leanne Graham',
			emails: ['Sincere@april.biz'],
			addresses: ['Kulas Light'],
			phones: ['1-770-736-8031 x56442'],
		},
		{
			id: 2,
			name: 'Ervin Howell',
			emails: ['Shanna@melissa.tv'],
			addresses: ['Victor Plains'],
			phones: ['010-692-6593 x09125'],
		},
		{
			id: 3,
			name: 'Clementine Bauch',
			emails: ['Nathan@yesenia.net'],
			addresses: ['Douglas Extension'],
			phones: ['1-463-123-4447'],
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

	clearContact: state => (state.contact = {}),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

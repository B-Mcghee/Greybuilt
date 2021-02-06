import axios from "axios";

const state = {
    contacts: []
};

const getters = {
    allContacts: state => state.contacts
};

const actions = {
    //  async fetchContacts({ commit }){
    //   const response = await axios.get('../static/contacts.json')
    //   .then(response => {

    //     commit('setContacts', response.data.contacts);

    // });
    //   // console.log('setContacts',response.data)

    // },
    async fetchContacts({ commit }) {
        const response = await axios
            .get("/api/contacts/${contact.contact_id}")
            .then(response => {
                commit("FETCH_CONTACTS", response.data);

            })
            .catch(error => {
                console.log(error);
            });
        // console.log('setContacts',response.data)
    },

    createContact({ commit }, contact) {
        axios
            .post("/api/contacts", contact)
            .then(response => {
                commit("CREATE_CONTACT", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    deletePost({ commit }, contact) {
        axios
            .delete("/api/contacts/${contact.contact_id}")
            .then(response => {
                if (response.data === "ok") commit("DELETE_CONTACT", contact);
            })
            .catch(error => {
                console.log(error);
            });
    },
    subscribeContact({ commit }, contact) {
        console.log(contact);
        axios
            .post("/api/newsletter", contact)
            .then(response => {
                if (response.data === "ok") {
                    commit("CREATE_CONTACT", response.data);
                }
            })

            .catch(error => {
                console.log(error);
            });
    }
};

const mutations = {
    setContacts: (state, contacts) => (state.contacts = contacts),

    CREATE_CONTACT(state, contact) {
        state.contacts.unshift(contact);
    },

    FETCH_CONTACTS(state, contacts) {
        return (state.contacts = contacts);
    },

    DELETE_CONTACT(state, contact) {
        let index = state.contacts.findIndex(item => item.id === contact.id);
        state.contacts.splice(index, 1);
    }
    FETCH_ALL
};

export default {
    state,
    getters,
    actions,
    mutations
};

export default {
    storeUser: (state, payload) => {
        state.user = payload;
    },

    setAuthenticated: (state, payload) => {
        state.authenticated = payload;
    }
};
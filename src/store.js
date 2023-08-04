import { createStore } from 'vuex';

export default createStore({
  state: {
    userData: null,
    authToken: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setAuthToken(state, authToken) {
      state.authToken = authToken;
    },
    clearUserData(state) {
      state.userData = null;
      state.authToken = null;
    },
  },
});

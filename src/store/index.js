import { createStore } from "vuex";
import { loginUser, registerUser, logout } from "../services/auth.service.js";
import createPersistedState from "vuex-persistedstate";

const initialState = {
  user: null,
  token: "",
};

export const store = createStore({
  state() {
    return { ...initialState };
  },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },

    setToken(state, token) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;
      commit("setUserData", user);
      commit("setToken", token);
    },
    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;
      commit("setUserData", user);
      commit("setToken", token);
    },
    async logout({ commit }) {
      await logout();
      commit("clearUserData");
    },
  },

  plugins: [createPersistedState({ paths: ["token"] })],
});

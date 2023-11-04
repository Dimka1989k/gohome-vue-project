import { createStore } from "vuex";
import { loginUser, registerUser } from "../services/auth.service.js";

const initialState = {
  user: null,
  token: "",
};

export const store = createStore({
  state() {
    return { ...initialState };
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },

    setToken(state, token) {
      state.token = token;
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
  },
});

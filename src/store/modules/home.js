let home = {
  state: {
    count: 12
  },
  mutations: {
    ADD_COUNT(state) {
      state.count++;
    }
  },
  actions: {
    addcount({commit}) {
      commit('ADD_COUNT');
    }
  }
};

export default home;
let navWidth = {
  state: {
    navWidth: '160px',
    navShow: true
  },
  mutations: {
    CHANGE_NAVWIDTH(state) {
      if (state.navShow) {
        state.navWidth = '60px';
        state.navShow = !state.navShow;
      } else {
        state.navWidth = '160px';
        state.navShow = !state.navShow;
      }

    }
  },
  actions: {
    changeNav({commit}) {
      commit('CHANGE_NAVWIDTH');
    }
  }
};
let home = {
  modules: {
    nav: navWidth
  }
};

export default home;
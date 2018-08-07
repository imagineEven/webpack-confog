import { parsedDate } from '../../router/parseRouter.js';

let home = {
  state: {
    navData: parsedDate,
    progress: [
      {
        name: '主页',
      },
      {
        name: '详情页'
      }
    ]
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

export default home;
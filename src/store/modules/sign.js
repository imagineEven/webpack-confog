let sign = {
  state: {
    num: 12
  },
  mutations: {
    ADDNUM(state) {
      state.num ++;
    }
  },
  actions: {
    addnum({commit}){
      console.log('执行了sign模块的js');
      commit('ADDNUM');
    }
  }
};
export default sign;
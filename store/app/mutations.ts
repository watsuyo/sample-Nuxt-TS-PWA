import Vue from 'vue'

export default {
  setOnlyPc(state, { payload }) {
    Vue.set(state.only, 'pc', payload.isPc)
  },
  setOnlySp(state, { payload }) {
    Vue.set(state.only, 'sp', payload.isSp)
  }
}

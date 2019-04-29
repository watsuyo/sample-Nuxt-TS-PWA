import Vue from 'vue'

export default {
  setOnlyPc(state: { only: object }, payload: { isPc: boolean}) {
    Vue.set(state.only, 'pc', payload.isPc)
  },
  setOnlySp(state: { only: object }, payload: { isSp: boolean}) {
    Vue.set(state.only, 'sp', payload.isSp)
  }
}

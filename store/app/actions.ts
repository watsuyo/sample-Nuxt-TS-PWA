export default {
  updateOnlys({ commit }, payload: { isPc: boolean }) {
    commit('setOnlyPc', { isPc: payload.isPc})
    commit('setOnlySp', { isSp: !payload.isPc})
  }
}

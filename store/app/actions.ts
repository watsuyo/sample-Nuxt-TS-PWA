export default {
  // Error: Binding element 'commit' implicitly has an 'any' type.
  updateOnlys({ commit }, payload: { isPc: boolean }) {
    commit('setOnlyPc', { isPc: payload.isPc})
    commit('setOnlySp', { isSp: !payload.isPc})
  }
}

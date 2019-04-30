import { MutationTree } from 'vuex'
import { PicksState, Pick } from '~/store/picks/types'

export default {
  setPicksByPickID(state, { pick }) {
    state.picksByPickID = pick
  },
} as MutationTree<PicksState>
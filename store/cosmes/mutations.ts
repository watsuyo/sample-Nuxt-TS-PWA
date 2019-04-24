import { MutationTree } from 'vuex'
import { CosmesState, Cosme } from '~/store/cosmes/types'

export default {
  setCosmesByCosmeID(state, { cosme }) {
    state.cosmeByCosmeID = cosme
  },
} as MutationTree<CosmesState>
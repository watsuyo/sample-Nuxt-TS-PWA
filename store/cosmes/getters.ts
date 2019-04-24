import { GetterTree } from 'vuex'
import { CosmesState, Cosme } from '~/store/cosmes/types'
import _filter from 'lodash/filter'

export default {
  getCosmesByCosmeID: (state: CosmesState) => {
    return _filter(state.cosmeByCosmeID, ((cosme: Cosme) => cosme.cosme_id === 1));
  }
} as GetterTree<CosmesState, Cosme>
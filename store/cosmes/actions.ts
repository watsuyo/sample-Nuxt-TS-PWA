import { ActionTree } from 'vuex'
import { CosmesState, Cosme } from '~/store/cosmes/types'
import axios from 'axios'

export default {
  async fetchCosmeByCosmeID({ commit }, cosmeID: number) {
    const cosmes: Cosme[] = (
      await axios.get(
      `http://localhost:8080/cosme/${cosmeID}`
    )).data
    commit('setCosmesByCosmeID', { cosme: cosmes })
  },
} as ActionTree<CosmesState, Cosme>
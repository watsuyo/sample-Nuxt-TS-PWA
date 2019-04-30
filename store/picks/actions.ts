import { ActionTree } from 'vuex'
import { PicksState, Pick } from '@/store/picks/types'
import axios from 'axios'

export default {
  async fetchPicksByPickID({ commit }, pickID: number) {
    const picks: Pick[] = (
      await axios.get(
      `http://localhost:8080/pick?pick_id=${pickID}`
    )).data
    console.log(picks);
    commit('setPicksByPickID', { pick: picks })
  },
} as ActionTree<PicksState, Pick>
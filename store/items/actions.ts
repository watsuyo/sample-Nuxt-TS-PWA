import { ActionTree } from 'vuex'
import { ItemsState, Item } from '@/store/items/types'
import axios from 'axios'

export default {
  async fetchItemsByItemID({ commit }, itemID: number) {
    const items: Item[] = (
      await axios.get(
      `http://localhost:8080/item?item_id=${itemID}`
    )).data
    console.log(items);
    commit('setItemsByItemID', { item: items })
  },
} as ActionTree<ItemsState, Item>